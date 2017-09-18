import sendMail from '../utils/sendMail';
import sendSMS from '../utils/sendSMS';
import getGroupUserEmail from '../utils/getGroupUserEmail';
import getGroupUserPhoneNumber from '../utils/getGroupUserPhoneNumber';


const Message = require('../models').Message;
const User = require('../models').User;
const Group = require('../models').Group;
// Method to post message
exports.post_message = (req, res) => {
  // console.log(req.body.message)
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
    message_status: 'unread',
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
  // console.log(req.params.id);
  Message.findAll({
    where: {
      $and: [{ group_id: req.params.id }, { message_status: 'unread' }]
    },
    attributes: ['id', 'message_body', 'priority_level', 'group_id', 'createdAt'],
    include: [{
      model: User,
      attributes: ['id', 'username', 'email'],
    }]
  })
  .then((messages) => {
    res.status(200).send({ status: true,
      message: 'Successful',
      data: messages });
  });
};
