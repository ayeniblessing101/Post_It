import Validator from 'validator';


const isEmpty = require('lodash/isEmpty');
// const commonValidations = require('../shared/validations/addgroup');
const User = require('../models').User;
const Group = require('../models').Group;
const GroupUser = require('../models').GroupUser;
// const Message = require('../models').Message;

exports.create_group = (req, res) => {
  /**
   * Fetch all Groups.
   * @param {Object} data - errors.
   * @returns {errors} - returns errors.
   */
  function validateInput(data) {
    const errors = {};

    if (Validator.isEmpty(data.groupname)) {
      errors.groupname = 'This field required';
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
    const userId = req.decoded.id;
    Group.findOne({
      where: {
        group_name: req.body.groupname,
        user_id: userId
      },
    })
    .then((group) => {
      // if (err) throw err;
      if (group) {
        errors.groupname = 'Groupname already exists';
      }
      if (!isEmpty(errors)) {
        res.status(400).send(errors);
      } else {
        const groupData = {
          group_name: req.body.groupname,
          user_id: userId
        };
        Group.create(groupData)
        .then((group) => {
          GroupUser.create({
            group_id: group.id,
            user_id: userId
          })
          .then(() => {
            // res.status(200).send({ status: true, message:
            // 'Successful', data: groupMembers });
          });
          return res.status(200).send({
            status: true, message: 'Successful', data: group
          });
        })
        .catch(error => res.status(400).send(error));
      }
    });
    // .catch(err => res.status(400).send(err));
  }
  // })
};

// get GroupUser
exports.get_groups = (req, res) => {
  const userId = req.decoded.data.id;
  // get groups created by the loggin userId
  GroupUser.findAll({
    where: {
      user_id: userId
    },
    attributes: ['group_id'],
    raw: true
  })
  .then((groups) => {
    const userBelongsTo = groups.map(group => group.group_id);
    Group.findAll({
      where: {
        $or: {
          user_id: userId,
          id: {
            $in: userBelongsTo
          }
        }
      },
      attributes: ['id', 'group_name'],
      raw: true
    })
    .then((allGroups) => {
      res.status(200).send(allGroups);
    })
    .catch((err) => {
      res.status(500).send(err, 'An error occurred, try again');
    });
  })
  .catch((err) => {
    res.status(500).send(err, 'An error occurred, try again');
  });
};


// Method to add user to a group
exports.add_user = (req, res) => {
  if (req.body.username || req.body.email) {
    User.findOne({
      where: {
        $or: [{ username: req.body.username }, { email: req.body.email }]
      },
      attributes: ['id', 'username', 'email']
    })
    .then((user) => {
      // res.status(200).send({ data: user });
      if (user) {
        GroupUser.findOrCreate({
          where: {
            $and: [{ user_id: user.id }, { group_id: req.params.id }]
          },
          defaults: {
            user_id: user.id,
            group_id: parseInt(req.params.id, 10)
          }
        })
        .spread((Usergroup, created) => {
          if (created) {
            res.status(201).send({
              status: true,
              message: 'User has been successfully added to group',
              data: Usergroup
            });
          } else {
            res.status(401)
              .send({ message: ' User has already been added to this group' });
          }
        });
      } else {
        res.status(404).send({ message: 'User does not exist' });
      }
    });
  } else {
    res.status(401).send({ message: 'username or email is required' });
  }
};
