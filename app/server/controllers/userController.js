// import {validateInput} from '../shared/validations/signup';
import Validator from 'validator';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import checkNum from '../utils/numberValidation';
// import forgotPasswordMail from '../utils/forgetPasswordMail';

const isEmpty = require('lodash/isEmpty');

const saltRounds = 10;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(saltRounds);
const User = require('../models').User;
const ForgotPassword = require('../models').ForgotPassword;
// const ForgotPasswords = require('../models').ForgotPasswords;


exports.identify = (req, res) => {
  User.findOne({
    where: {
      $or: [{ username: req.params.identifier }, { email: req.body.email }]
      // email: req.params.identifier,
    },
    attributes: ['id', 'username', 'email']
  })
  .then(
    (user) => {
      res.send({ user });
    });
};

exports.signup = (req, res) => {
  /**
   * Validates and check if input fields are empty.
   * @param {Object} data - groupdId.
   *@returns {status} - returns status.
   */
  function validateInput(data) {
    const errors = {};
    if (Validator.isEmpty(data.username)) {
      errors.username = 'This field required';
    }
    if (Validator.isEmpty(data.email)) {
      errors.email = 'This field required';
    }
    if (!checkNum(data.phoneNo)) {
      errors.phoneNo = 'This field required';
    }
    if (Validator.isEmpty(data.password)) {
      errors.password = 'This field required';
    }
    if (Validator.isEmpty(data.confirm_password)) {
      errors.confirm_password = 'This field required';
    }
    if (!Validator.equals(data.password, data.confirm_password)) {
      errors.confirm_password = 'Password must Match';
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  }

  const { errors, isValid } = validateInput(req.body);
  // validateInput(req.body).then(({ errors, isValid }) => {
  if (!isValid) {
    res.status(400).send(errors);
  } else {
    User.findOne({
      where: {
        username: req.body.username
      },
    })
    .then((user, err) => {
      if (err) throw err;
      if (user) {
        errors.username = 'Username already exists';
      }
      User.findOne({
        where: {
          email: req.body.email
        },
      })
      .then((newUser) => {
        // if (err) {
        //   console.log('no user found');
        // }
        if (newUser) {
          errors.email = 'Email already exists';
        }
        if (!isEmpty(errors)) {
          res.status(400).send(errors);
        } else {
          const userData = {
            username: req.body.username,
            email: req.body.email,
            phone: parseInt(req.body.phoneNo, 10),
            password: bcrypt.hashSync(req.body.password, salt)
          };
          User.create(userData)
          .then(() => {
            res.status(201).send({ status: true,
              message: 'Signup was successful' });
          })
          .catch(error => res.status(400).send(error));
        }
      });
    });
  }
  // })
};

// sigin a user
exports.login = (req, res) => {
  if (req.body.username === '') {
    res.status(401).send({ status: false, message: 'Username is required' });
  } else if (req.body.password === '') {
    res.status(401).send({ status: false, message: 'Password is required' });
  } else {
    User.findOne({
      where: {
        username: req.body.username,
      },
    })
    .then((user) => {
      if (!user) {
        res.status(401).json({ errors: { form: 'Invalid Credentials' } });
      } else if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({
            data: user
          }, 'secret', { expiresIn: 1440 });
          res.json({ token });
        } else {
          res.status(401).json({ errors: { form: 'Invalid Credentials' } });
        }
      }
    });
  }
};

// Method to handle forgot Password
exports.forgotPassword = (req, res) => {
  if (req.body.email === '') {
    res.status(401).send({
      status: false, message: 'Email is required' });
  } else {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
    .then((user) => {
      if (user) {
        ForgotPassword.create({
          user_email: user.email,
          reset_password_token: crypto.randomBytes(32).toString('hex'),
          reset_password_expires: Date.now() + 3600000
        })
        .then((result) => {
          res.status(201)
          .send({ status: false, message: 'Successful' });
          const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // secure:true for port 465, secure:false for port 587
            auth: {
              user: 'ayeniblessing32@gmail.com',
              pass: 'Welcome3000#'
            }
          });
          // setup email data with unicode symbols
          const mailOptions = {
            from: 'Post It', // sender address
            to: user.email, // list of receivers
            subject: 'Post It || Reset Password', // Subject line
            // text: 'Hello world ?', // plain text body
            html: `<b>Hello </b>
              http://localhost:3000/user/password/verify?token=${result.reset_password_token}&email=${user.email}` // html body
          };
          // send mail with defined transport object
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return res.send(error);
            }
            res.send('Message %s sent: %s', info.messageId, info.response);
          });
        })
        .catch((error) => {
          return res.status(400).send({
            error
          });
        });
      } else {
        res.status(400).send({
          message: 'Cannot find user with that email'
        });
      }
    });
  }
};
exports.checkToken = (req, res) => {
  const token = (req.query.token).toString();
  if (typeof token !== 'string') {
    return res.status(400).send({
      message: 'Token must be a string'
    });
  }
  ForgotPassword.findOne({
    where: {
      reset_password_token: req.query.token
    }
  })
  .then((tokenVerified) => {
    if (tokenVerified) {
      res.status(200).send({
        message: 'Token Found!'
      });
    } else {
      res.status(400).send({
        message: 'Token not found'
      });
    }
  }).catch((error) => {
    res.status(400).send({
      error
    });
  });
};

exports.resetPassword = (req, res) => {
  if (req.body.newPassword === '') {
    return res.status(401).send({
      status: false, message: 'New Password is required' });
  }

  if (req.body.confirmPassword === '') {
    return res.status(401).send({
      status: false, message: 'Please Confirm your new Password' });
  }

  if (req.body.confirmPassword !== req.body.confirmPassword) {
    return res.status(401).send({
      status: false, message: 'Password does not match' });
  }
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then((user) => {
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    const password = bcrypt.hashSync(req.body.newPassword, salt);
    user.update({
      password
    })
    .then(() => {
      res.status(200).send({
        message: 'Password updated succesfully'
      });
    });
  });
};


exports.search = (req, res) => {
  let limit = req.query.limit;
  let offset = req.query.offset;
  const page = Math.ceil(((req.query.offset) / (req.query.limit)) + 1) || 1;
  limit = Number(limit) || 10;
  offset = Number(offset) || 0;

  User.findAndCountAll({
    where: {
      username: {
        $iLike: `%${req.query.q}%`
      }
    },
    attributes: ['username', 'email'],
    offset,
    limit
  }).then((users) => {
    if (!users) {
      res.status(404).send({
        error: 'User not found'
      });
    } else {
      const pageCount = Math.ceil(users.count / limit);
      const pageSize = limit;
      const totalCount = users.count;

      res.status(200).send({
        users: users.rows,
        page,
        pageCount,
        pageSize,
        totalCount
      });
    }
  }).catch((err) => {
    res.status(500).send({
      err,
      message: 'A fatal error was encountered, Please try again later.',
      status: 400
    });
  });
};

