import isEmpty from 'lodash/isEmpty';
import Promise from 'bluebird';
import commonValidations from '../shared/validations/addgroup';

const User = require('../models').User;
const Group = require('../models').Group;
const GroupUser = require('../models').GroupUser;
// const Message = require('../models').Message;

function validateInput(data, otherValidations) {
  const { errors } = otherValidations(data);

  return Promise.all([
    Group.findOne({ where: { group_name: data.groupname }, }).then((group) => {
      if (group) { errors.groupname = 'Group already Exist'; }
    }),
  ]).then(() => {
    return {
      errors,
      isValid: isEmpty(errors)
    };
  });
}

exports.create_group = (req, res) => {
  validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if (!isValid) {
      res.status(400).json(errors);
    } else {
      const userId = req.decoded.data.id;
      Group.create({
        group_name: req.body.groupname,
        user_id: userId
      })
      .then((usergroup) => {
        res.status(200).send({ message: 'success', data: usergroup });
      });
    }
  });
};


// Method to add user to a group
exports.add_user = (req, res) => {
  if (req.body.username === '') {
    res.status(401).send({ message: 'username is required' });
  } else {
    User.findOne({
      where: {
        username: req.body.username
      },
    })
    .then((user) => {
      if (user) {
        GroupUser.create({
          group_id: req.params.id,
          user_id: user.id,
        })
        .then((groupusers) => {
          res.status(201).send({ message: 'Successful', data: groupusers });
        });
      } else {
        res.status(404).send({ message: 'User not found' });
      }
    });
  }
};
