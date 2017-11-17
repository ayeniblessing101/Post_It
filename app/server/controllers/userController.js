require('dotenv').config();

const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { validateSignUpInput } = require('../validations/validation');

const isEmpty = require('lodash/isEmpty');

const saltRounds = 10;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(saltRounds);
const User = require('../models').User;
const ForgotPassword = require('../models').ForgotPassword;

/**
  * Registers a new user
  * @param {Object} request - request.
  * @param {Object} response - response.
  *
  * @returns {newMessage} - returns a new message.
 */
exports.signup = (request, response) => {
  const { errors, isValid } = validateSignUpInput(request.body);
  if (!isValid) {
    response.status(422).send(errors);
  } else {
    User.findOne({
      where: {
        $or: [
          { username: request.body.username },
          { email: request.body.email },
        ],
      },
    })
      .then((newUser) => {
        if (newUser && newUser.email === request.body.email) {
          errors.email = 'Email already exists';
        }
        if (newUser && newUser.username === request.body.username) {
          errors.username = 'Username already exists';
        }
        if (!isEmpty(errors)) {
          response.status(409).send(errors);
        } else {
          const userData = {
            username: request.body.username,
            email: request.body.email,
            phone: parseInt(request.body.phoneNo, 10),
            password: bcrypt.hashSync(request.body.password, salt),
          };
          User.create(userData)
            .then((user) => {
              const token = jwt.sign(
                {
                  id: user.id,
                  username: user.username,
                  email: user.email,
                  phone: user.phone,
                },
                'secret',
                { expiresIn: 144444440 },
              );
              response.status(201).send({
                status: true,
                message: 'Signup was successful',
                token,
              });
            })
            .catch(error => response.status(500).send(error));
        }
      })
      .catch(error => response.status(500).send(error));
  }
};

/**
  * Authenticates a user
  * @param {Object} request - request.
  * @param {Object} response - response.
  *
  * @returns {token} - returns a token.
 */
// sigin a user
exports.login = (request, response) => {
  if (request.body.username === '') {
    response
      .status(422)
      .send({ status: false, message: 'Username is required' });
  } else if (request.body.password === '') {
    response
      .status(422)
      .send({ status: false, message: 'Password is required' });
  } else {
    User.findOne({
      where: {
        username: request.body.username,
      },
    }).then((user) => {
      if (!user) {
        response.status(404).json({ errors: { form: 'Invalid Credentials' } });
      } else if (user) {
        if (bcrypt.compareSync(request.body.password, user.password)) {
          const token = jwt.sign(
            {
              id: user.id,
              username: user.username,
              email: user.email,
              phone: user.phone,
            },
            'secret',
            { expiresIn: 144444440 },
          );
          response.json({ token });
        } else {
          response
            .status(400)
            .json({ errors: { form: 'Invalid Credentials' } });
        }
      }
    });
  }
};

/**
  * sends forgot password token to user via email
  * @param {Object} request - request.
  * @param {Object} response - response.
  *
  * @returns {message} - returns a success or failure message.
 */
// Method to handle forgot Password
exports.sendForgotPasswordToken = (request, response) => {
  if (request.body.email === '') {
    response.status(422).send({
      status: false,
      message: 'Email is required',
    });
  } else {
    User.findOne({
      where: {
        email: request.body.email,
      },
    }).then((user) => {
      if (user) {
        ForgotPassword.create({
          user_email: user.email,
          reset_password_token: crypto.randomBytes(32).toString('hex'),
          reset_password_expires: Date.now() + 3600000,
        })
          .then((result) => {
            response.status(201).send({ message: 'Successful' });
            const transporter = nodemailer.createTransport({
              host: 'smtp.gmail.com',
              port: 465,
              secure: true,
              auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
              },
            });
            const mailOptions = {
              from: 'Post It',
              to: user.email,
              subject: 'Post It || Reset Password',

              html: `<body><div>
            <div style="background-color:#f2f3f5;padding:20px">
              <div style="max-width:600px;margin:0 auto">
               <div 
                style="
                  background:#fff;
                  font:14px sans-serif;
                  color:#686f7a;
                  border-top:4px solid #3F4256;
                  margin-bottom:20px">
                <div 
                  style="
                   border-bottom:1px solid #f2f3f5;
                   padding-bottom:20px;
                   padding-top:20px">
                  <h4 
                    style="
                      padding-top:0; 
                      padding-left:20px; 
                      margin:0; 
                      font-size:30px;">PostIt</h4>
                </div>
                <div style="padding:30px 20px;line-height:1.5em;color:#686f7a">
                  <p style="color:#737373">Hi ${user.username},</p>
                  <p 
                    style="
                      border-bottom:1px solid #f2f3f5;
                      padding-bottom:20px;
                      margin-bottom:20px;
                      color:#686f7a">
                     A password reset for your account was requested.
                  </p>
                  <p 
                    style="
                      border-bottom:1px solid #f2f3f5;
                      padding-bottom:20px;
                      margin-bottom:20px;
                      color:#686f7a">
                      Please click the button below to change your password.
                  </p>
                  <a href=${request.headers
                    .origin}/user/password/verify?token=${result.reset_password_token}&email=${user.email} 
                    style="
                      display:inline-block;
                      font-size:15px;color:#ffffff;
                      padding:10px 15px;
                      text-decoration:none;
                      background-color:#3F4256;
                      border-radius:3px" 
                      target="_blank">
                      Change Your Password
                  </a>
                </div>
             </div>
            </div>
          </body>`,
            };
            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                return response.send(error);
              }
              response.send(
                'Message %s sent: %s',
                info.messageId,
                info.response,
              );
            });
          })
          .catch((error) => {
            return response.status(500).send({
              error,
            });
          });
      } else {
        response.status(404).send({
          message: 'Cannot find user with that email',
        });
      }
    });
  }
};

/**
  * checks if token is valid
  * @param {Object} request - request.
  * @param {Object} response - response.
  *
  * @returns {message} - returns a success or failure message.
 */
exports.checkToken = (request, response) => {
  const token = request.query.token;
  if (typeof token !== 'string' || token === '') {
    return response.status(400).send({
      message: 'Invalid token',
    });
  }
  ForgotPassword.findOne({
    where: {
      reset_password_token: request.query.token,
    },
  })
    .then((tokenExist) => {
      if (tokenExist) {
        response.status(200).send({
          message: 'Token Found!',
        });
      } else {
        response.status(404).send({
          message: 'Token not found',
        });
      }
    })
    .catch((error) => {
      response.status(500).send({
        error,
      });
    });
};

/**
  * reset user password
  * @param {Object} request - request.
  * @param {Object} response - response.
  *
  * @returns {message} - returns a success message.
 */
exports.resetPassword = (request, response) => {
  if (request.body.newPassword === '') {
    return response.status(422).send({
      status: false,
      message: 'New Password is required',
    });
  }

  if (request.body.confirmPassword === '') {
    return response.status(422).send({
      status: false,
      message: 'Please Confirm your new Password',
    });
  }

  if (request.body.newPassword !== request.body.confirmPassword) {
    return response.status(401).send({
      status: false,
      message: 'Password does not match',
    });
  }
  User.findOne({
    where: {
      email: request.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return response.status(404).send({ message: 'User not found' });
      }
      const password = bcrypt.hashSync(request.body.newPassword, salt);
      user
        .update({
          password,
        })
        .then(() => {
          return response.status(204).json({
            message: 'Password updated succesfully',
          });
        });
    })
    .catch((err) => {
      response.status(500).send({
        err,
        message: 'A fatal error was encountered, Please try again later.',
        status: 500,
      });
    });
};

/**
  * Searches for a user and paginates the result
  * @param {Object} request - request.
  * @param {Object} response - response.
  *
  * @returns {users} - returns a new message.
 */
exports.search = (request, response) => {
  let limit = request.query.limit;
  let offset = request.query.offset;
  const page = Math.ceil(request.query.offset / request.query.limit + 1) || 1;
  limit = Number(limit) || 10;
  offset = Number(offset) || 0;

  User.findAndCountAll({
    where: {
      username: {
        $iLike: `%${request.query.q}%`,
      },
    },
    attributes: ['username', 'email'],
    offset,
    limit,
  })
    .then((users) => {
      if (!users) {
        response.status(404).send({
          error: 'User not found',
        });
      } else {
        const pageCount = Math.ceil(users.count / limit);
        const pageSize = limit;
        const totalCount = users.count;

        response.status(200).send({
          users: users.rows,
          page,
          pageCount,
          pageSize,
          totalCount,
        });
      }
    })
    .catch((err) => {
      response.status(500).send({
        err,
        message: 'A fatal error was encountered, Please try again later.',
        status: 500,
      });
    });
};
