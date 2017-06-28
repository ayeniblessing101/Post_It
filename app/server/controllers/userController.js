const User = require('../models').User;

const saltRounds = 10;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(saltRounds);

exports.signup = (req, res) => {
  if (req.body.username === '') {
    res.status(401).send({ status: false, message: 'Username is required' });
  } else if (req.body.password === '') {
    res.status(401).send({ status: false, message: 'Password is required' });
  } else if (req.body.email === '') {
    res.status(401).send({ status: false, message: 'Email is required' });
  } else {
    User.findOne({
      where: {
        username: req.body.username,
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(401).send({ status: false, message: 'Username already exist' });
      } else {
        User.findOne({
          where: {
            email: req.body.email,
          },
        }).then((email) => {
          if (email) {
            res.status(401).send({ status: false, message: 'Email already exist' });
          } else {
            User.create({
              username: req.body.username,
              password: bcrypt.hashSync((req.body.password), salt),
              email: req.body.email
            })
            .then((newuser) => {
              res.status(201).send({ status: true, message: 'Successful' });
            });
          }
        });
      }
    });
  }
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
    .then((user, err) => {
      if (!user) {
        res.status(404).send({ message: 'Authentication failed. User not found' });
      } else if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({
            data: user
          }, 'secret', { expiresIn: 1440 });
          res.status(200).send({ message: 'Authentication Successful', Token: token });
        } else {
          res.status(401).send({ message: 'Authentication failed. Incorrect Password' });
        }
      }
    });
  }
};
