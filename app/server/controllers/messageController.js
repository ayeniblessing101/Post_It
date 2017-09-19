const sendMail = require('../utils/sendMail');
const sendSMS = require('../utils/sendSMS');
const getGroupUserEmail = require('../utils/getGroupUserEmail');
const getGroupUserPhoneNumber = require('../utils/getGroupUserPhoneNumber');


const Message = require('../models').Message;
const User = require('../models').User;
const Group = require('../models').Group;
const ReadMessage = require('../models').ReadMessage;
// Method to post message
exports.post_message = (req, res) => {
  if (req.body.message === '') {
    return res.status(404).send({ status: false,
      message: 'message body cannot be empty' });
  }
  const userId = req.decoded.data.id;
  Group.findById(req.params.id)
  .then((group) => {
    if (!group) {
      return res.send({
        status: 400,
        message: 'You cannot post to a group that does not exists'
      });
    }
  });
  Message.create({
    message_body: req.body.message,
    priority_level: req.body.priority,
    read_by: [userId],
    group_id: req.params.id,
    user_id: userId,
  })
  .then((message) => {
    // method to get all emails
    const { data, emailUsers } = getGroupUserEmail(req.params.id,
      message, req.decoded.data);
    const { userPhoneNumbers } = getGroupUserPhoneNumber(req.params.id,
      message, req.decoded.data);
    switch (req.body.priority) {
    case 'Critical':
      sendMail(emailUsers, message.message_body);
      return res.status(201).send({
        data
      });
    case 'Urgent':
      sendMail(emailUsers, message.message_body);
      sendSMS(userPhoneNumbers, message.message_body);
      return res.status(201).send({
        data
      });
    default:
      return res.status(201).send({
        data: {
          id: message.id,
          message_body: message.message_body,
          priority_level: message.priority_level,
          createdAt: message.createdAt,
          User: {
            id: req.decoded.data.id,
            username: req.decoded.data.username
          }
        }
      });
    }
  })
  .catch(err => (
    res.status(500).send(err, 'An error occurred, try again')
  ));
};

// Method to get Messages
exports.get_messages = (req, res) => {
  const userId = req.decoded.data.id;
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
    res.status(400).send({ message: 'No messages to display' });
  });
};

// Method to record message views
exports.message_views = (req, res) => {
  const userId = req.decoded.data.id;
  Message.findOne({
    where: {
      id: req.body.messageId
    }
  })
  .then((message) => {
    if (message) {
      ReadMessage.findOne({
        where: {
          $and: [{ message_id: message.id }, { user_id: userId }]
        }
      })
      .then((response) => {
        if (response) {
          return res.status(400).send({ message: 'Message viewed already' });
        }
        ReadMessage.create({
          message_id: message.id,
          user_id: userId,
          group_id: message.group_id,
        })
        .then(() => res.status(200).send({ message: 'Message created!' }))
        .catch(error => res.status(400)
        .send({ message: 'An error occured!', error }));
      })
      .catch((error) => {
        res.status(400).send({ error, message: 'An error occured, try again' });
      });
    }
  })
  .catch((error) => {
    res.status(400).send({ error, message: 'An error occured, try again' });
  });
};
