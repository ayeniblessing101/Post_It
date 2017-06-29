// const User = require('../models').User;
const Group = require('../models').Group;
// const Group_user = require('../models').Group_user;
// const Message = require('../models').Message;

// Add a user to a group
exports.create_group = (req, res) => {
  if (req.body.group_name === '') {
    res.status(400).send({ message: 'Group name is required' });
  }
  const userId = req.decoded.data.id;
  Group.findOne({
    where: {
      group_name: req.body.group_name
    },
  })
  .then((group) => {
    if (group) {
      res.status(401).send({ status: false, message: 'Group created already' });
    }
    Group.create({
      group_name: req.body.group_name,
      user_id: userId
    })
    .then((usergroup) => {
      res.status(200).send({ message: 'success', data: usergroup });
    });
  });
};
