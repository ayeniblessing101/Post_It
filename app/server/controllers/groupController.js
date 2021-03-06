const Validator = require('validator');

const isEmpty = require('lodash/isEmpty');
const User = require('../models').User;
const Group = require('../models').Group;
const GroupUser = require('../models').GroupUser;

/**
   * Creates a new group.
   * @param {Object} req - request.
   * @param {Object} res - response.
   * @returns {data} - returns data of the group created.
*/
exports.create_group = (req, res) => {
  /**
   * Creates a new group.
   * @param {Object} data - request.
   * @returns {errors} - returns errors
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
      if (group) {
        errors.groupname = 'Groupname already exists';
      }
      if (!isEmpty(errors)) {
        res.status(409).send(errors);
      } else {
        const groupData = {
          group_name: req.body.groupname,
          user_id: userId
        };
        Group.create(groupData)
        .then((groupNew) => {
          GroupUser.create({
            group_id: groupNew.id,
            user_id: userId
          })
          .then(() => {
          });
          return res.status(201).send({
            status: true, message: 'Successful', data: groupNew
          });
        })
        .catch(error => res.status(500).send(error));
      }
    });
  }
};

// get GroupUser
exports.get_groups = (req, res) => {
  const userId = req.decoded.id;
  // get groups created by the loggedin userId
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
      attributes: [['group_name', 'groupName'], 'user_id', 'id'],
      raw: true,
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
            res.status(200).send({
              status: true,
              message: 'User has been successfully added to group',
              data: Usergroup
            });
          } else {
            res.status(409)
              .send({ status: true,
                message: 'User has already been added to this group' });
          }
        });
      } else {
        res.status(404).send({ message: 'User does not exist' });
      }
    });
  } else {
    res.status(400).send({ message: 'username or email is required' });
  }
};


// Method to get all users in a group
exports.get_users = (req, res) => {
  Group.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id'],
    include: [{
      model: User,
      as: 'members',
      attributes: ['id', 'username'],
      through: {
        attributes: []
      },
    }],
  })
  .then((users) => {
    res.status(200).send({ status: true,
      message: 'Successful',
      data: users });
  });
};
