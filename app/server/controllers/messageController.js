const sendMail = require('../utils/sendMail');
const getGroupUserEmail = require('../utils/getGroupUserEmail');

const Message = require('../models').Message;
const User = require('../models').User;
const Group = require('../models').Group;

// Method to post message
exports.post_message = (req, res) => {
  if (req.body.message === '') {
    return res.status(400).send({ status: false,
      message: 'message body cannot be empty' });
  }
  const userId = req.decoded.id;
  Group.findById(req.params.id)
  .then((group) => {
    if (!group) {
      return res.status(404).send({
        status: 404,
        message: 'You cannot post to a group that does not exists'
      });
    }
  }).catch(err =>
    res.status(500).send(err, 'An error occurred, try again'));
  Message.create({
    message_body: req.body.message_body,
    priority_level: req.body.priority_level,
    read_by: [userId],
    group_id: req.params.id,
    user_id: userId,
  })
  .then((message) => {
    // method to get all emails
    const { data, emailUsers } = getGroupUserEmail(req.params.id,
      message, req.decoded);
    switch (req.body.priority) {
    case 'Critical':
      sendMail(emailUsers, message.message_body, message.priority_level);
      return res.status(200).send({
        data
      });
    case 'Urgent':
      sendMail(emailUsers, message.message_body, message.priority_level);
      return res.status(200).send({
        data
      });
    default:
      return res.status(200).send({
        data: {
          id: message.id,
          message_body: message.message_body,
          priority_level: message.priority_level,
          createdAt: message.createdAt,
          User: {
            id: req.decoded.id,
            username: req.decoded.username
          }
        }
      });
    }
  })
  .catch(err =>
    res.status(500).send(err, 'An error occurred, try again'));
};

// Method to get Messages
exports.get_messages = (req, res) => {
  const groupId = parseInt(req.params.id, 10);
  if (isNaN(groupId)) {
    return res.status(400).send({
      message: 'Group id must be an integer'
    });
  }
  Message.findAll({
    where: { group_id: groupId },
    attributes:
    ['id', 'message_body', 'priority_level', 'group_id', 'createdAt'],
    include: [{
      model: User,
      attributes: ['id', 'username', 'email'],
    }]
  })
  .then((messages) => {
    if (messages) {
      return res.status(200).send({
        messages
      });
    }
    return res.status(400).send({ message: 'No messages to display' });
  });
};
