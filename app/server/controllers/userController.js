// import {validateInput} from '../shared/validations/signup';
import Validator from 'validator';
import checkNum from '../utils/numberValidation';

const isEmpty = require('lodash/isEmpty');

// const validateInput = require('../shared/validations/signup');
// const commonValidations = require('../shared/validations/signup');

// const express = require('express');

// const router = express.Router();

const User = require('../models').User;

const saltRounds = 10;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(saltRounds);

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

  console.log(req.body);
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
          .then((user) => {
            res.status(201).send({ success: true, message: 'Signup was successful' });
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
