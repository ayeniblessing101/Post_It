const User = require('../models').User;

const saltRounds = 10;
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(saltRounds);

exports.signup = (req, res) => {
  if (req.body.username === '') {
    res.status(400).send({ status: false, message: 'Username is required' });
  } else if (req.body.password === '') {
    res.status(400).send({ status: false, message: 'Password is required' });
  } else if (req.body.email === '') {
    res.status(400).send({ status: false, message: 'Email is required' });
  } else {
    User.findOne({
      where: {
        username: req.body.username,
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({ status: false, message: 'Username already exist' });
      } else {
        User.findOne({
          where: {
            email: req.body.email,
          },
        }).then((email) => {
          if (email) {
            res.status(400).send({ status: false, message: 'Email already exist' });
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
