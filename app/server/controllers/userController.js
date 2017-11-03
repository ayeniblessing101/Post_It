require('dotenv').config();

const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { validateInput } = require('../validations/signup');

const isEmpty = require('lodash/isEmpty');

const saltRounds = 10;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(saltRounds);
const User = require('../models').User;
const ForgotPassword = require('../models').ForgotPassword;


exports.signup = (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  if (!isValid) {
    res.status(422).send(errors);
  } else {
    User.findOne({
      where: { $or: [
        { username: req.body.username },
        { email: req.body.email }
      ]
      },
    })
      .then((newUser) => {
        if (newUser && newUser.email === req.body.email) {
          errors.email = 'Email already exists';
        }
        if (newUser && newUser.username === req.body.username) {
          errors.username = 'Username already exists';
        }
        if (!isEmpty(errors)) {
          res.status(409).send(errors);
        } else {
          const userData = {
            username: req.body.username,
            email: req.body.email,
            phone: parseInt(req.body.phoneNo, 10),
            password: bcrypt.hashSync(req.body.password, salt)
          };
          User.create(userData)
          .then((user) => {
            const token = jwt.sign({
              id: user.id,
              username: user.username,
              email: user.email,
              phone: user.phone
            }, 'secret', { expiresIn: 144444440 });
            res.status(201).send({
              status: true,
              message: 'Signup was successful',
              token
            });
          })
          .catch(error => res.status(500).send(error));
        }
      })
      .catch(error => res.status(500).send(error));
  }
};

// sigin a user
exports.login = (req, res) => {
  if (req.body.username === '') {
    res.status(422).send({ status: false, message: 'Username is required' });
  } else if (req.body.password === '') {
    res.status(422).send({ status: false, message: 'Password is required' });
  } else {
    User.findOne({
      where: {
        username: req.body.username,
      },
    })
    .then((user) => {
      if (!user) {
        res.status(404).json({ errors: { form: 'Invalid Credentials' } });
      } else if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone
          }, 'secret', { expiresIn: 144444440 });
          res.json({ token });
        } else {
          res.status(400).json({ errors: { form: 'Invalid Credentials' } });
        }
      }
    });
  }
};

// Method to handle forgot Password
exports.sendForgotPasswordToken = (req, res) => {
  if (req.body.email === '') {
    res.status(422).send({
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
            secure: true,
            auth: {
              user: process.env.EMAIL,
              pass: process.env.EMAIL_PASSWORD
            }
          });
          const mailOptions = {
            from: 'Post It',
            to: user.email,
            subject: 'Post It || Reset Password',

            html: `<body style="max-width:100%; color: #000;">
            <div style=" 
              padding:10px; 
              color:white; 
              height: 10px;">
            <h3 style="text-align: center; font-size: 40px; margin-top: 5px;">
              PostIt!
            </h3>
            </div>
            <div 
              style="outline: 0px solid black; 
              padding-left: 20px; padding-right: 30px; >
            <div>
            <h1><strong>Hello, ${user.username}. </strong></h1>
            <h4>
              We received a request for a password reset on your PostIt Account.
            </h4>
            </div>
            <p>
              If you didn't make such request, please ignore this email.
              Otherwise, please click the button below to reset your password
            </p>
            <div style="align-items: center; width: 100%">
              <a 
                href=${req.headers.origin}/user/password/verify?token=${result.reset_password_token}&email=${user.email}
                style="width: 150px; padding:10px 0; text-decoration: none; 
                cursor: pointer !important; display: block; 
                border: 1px solid #404357; background-color: #fff; 
                color: #000000; font-size: 18px; 
                margin: auto; text-align: center">
                Reset Password
              </a>
            </div>
                <p style="text-align: right;">Regards, the PostIt team.</p>
                <br>
                <br>
            </div>
            </body>`
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return res.send(error);
            }
            res.send('Message %s sent: %s', info.messageId, info.response);
          });
        })
        .catch((error) => {
          return res.status(500).send({
            error
          });
        });
      } else {
        res.status(404).send({
          message: 'Cannot find user with that email'
        });
      }
    });
  }
};
exports.checkToken = (req, res) => {
  const token = req.query.token;
  if (typeof token !== 'string' || token === '') {
    return res.status(400).send({
      message: 'Invalid token'
    });
  }
  ForgotPassword.findOne({
    where: {
      reset_password_token: req.query.token
    }
  })
  .then((tokenExist) => {
    if (tokenExist) {
      res.status(200).send({
        message: 'Token Found!'
      });
    } else {
      res.status(404).send({
        message: 'Token not found'
      });
    }
  }).catch((error) => {
    res.status(500).send({
      error
    });
  });
};

exports.resetPassword = (req, res) => {
  if (req.body.newPassword === '') {
    return res.status(422).send({
      status: false, message: 'New Password is required' });
  }

  if (req.body.confirmPassword === '') {
    return res.status(422).send({
      status: false, message: 'Please Confirm your new Password' });
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
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
      return res.status(204).json({
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
      status: 500
    });
  });
};

