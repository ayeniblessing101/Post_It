const User = require('../models').User;
const Group = require('../models').Group;
const GroupUser = require('../models').GroupUser;
// const Message = require('../models').Message;

// Add a user to a group
exports.create_group = (req, res) => {
  if (req.body.group_name === '') {
    res.status(400).send({ message: 'Group name is required' });
  }
  const userId = req.decoded.data.id;
  Group.findOne({
    where: {
      group_name: req.body.groupname
    },
  })
  .then((group) => {
    if (group) {
      res.status(401).send({ status: false, message: 'Group created already' });
    }
    Group.create({
      group_name: req.body.groupname,
      user_id: userId
    })
    .then((usergroup) => {
      res.status(200).send({ message: 'success', data: usergroup });
    });
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
