// import validateInput from '../shared/validations/signup';
const isEmpty = require('lodash/isEmpty');
const Promise = require('bluebird');
const commonValidations = require('../shared/validations/addgroup');

// const express = require('express');

// const router = express.Router();

const User = require('../models').User;

const saltRounds = 10;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(saltRounds);

function validateInput(data, otherValidations) {
  const { errors } = otherValidations(data);

  return Promise.all([
    User.findOne({ where: { username: data.username }, }).then((user) => {
      if (user) { errors.username = 'Username already Exist'; }
    }),
    User.findOne({ where: { email: data.email }, }).then((user) => {
      if (user) { errors.email = 'Email already Exist'; }
    })
  ]).then(() => {
    return {
      errors,
      isValid: isEmpty(errors)
    };
  });
}

exports.identify = (req, res) => {
  User.findOne({
    where: {
      username: req.params.identifier,
      // email: req.params.identifier,
    },
    orWhere: [
      {
        email: req.params.identifier
      }
    ],
    attributes: ['id', 'username', 'email']
  })
  .then(
    (user) => {
      res.send({ user });
    });
};

exports.signup = (req, res) => {
  validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if (!isValid) {
      res.status(400).json(errors);
    } else {
      User.create({
        username: req.body.username,
        password: bcrypt.hashSync((req.body.password), salt),
        confirm_password: bcrypt.hashSync((req.body.password), salt),
        email: req.body.email
      })
      .then((newuser) => {
        res.status(201).send({ success: true });
      })
      .catch((err) => {
        res.status(500).send({ error: err });
      });
    }
  });
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
          // res.status(200).send({ message: 'Authentication Successful', Token: token });
          res.json({ token });
        } else {
          res.status(401).json({ errors: { form: 'Invalid Credentials' } });
        }
      }
    });
  }
};
