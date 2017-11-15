const sendMail = require('../utils/sendMail');
const getGroupUserEmail = require('../utils/getEmails');

const Message = require('../models').Message;
const User = require('../models').User;
const Group = require('../models').Group;

/**
  * post a message
  * @param {Object} request - request.
  * @param {Object} response - response.
  * @returns {newMessage} - returns a new message.
 */
// Method to post message
exports.postMessage = (request, response) => {
  const priorityLevel = request.body.priority_level;
  if (request.body.message === '') {
    return response.status(400).send({ status: false,
      message: 'message body cannot be empty' });
  }
  const userId = request.decoded.id;
  Group.findById(request.params.id)
  .then((group) => {
    if (!group) {
      return response.status(404).send({
        status: 404,
        message: 'You cannot post to a group that does not exists'
      });
    }
    Message.create({
      message_body: request.body.message_body,
      priority_level: priorityLevel,
      read_by: [userId],
      group_id: request.params.id,
      user_id: userId,
    })
    .then((message) => {
      // method to get all emails
      getGroupUserEmail(request.params.id,
        message, request.decoded).then((messageData) => {
          console.log(messageData);
          const { emailUsers } = messageData;
          switch (priorityLevel) {
          case 'Critical':
            sendMail(emailUsers, message.message_body, priorityLevel);
            return response.status(200).send({
              newMessage: {
                id: message.id,
                message_body: message.message_body,
                priority_level: message.priority_level,
                createdAt: message.createdAt,
                User: {
                  id: request.decoded.id,
                  username: request.decoded.username
                }
              }
            });
          case 'Urgent':
            sendMail(emailUsers, message.message_body, priorityLevel);
            return response.status(200).send({
              newMessage: {
                id: message.id,
                message_body: message.message_body,
                priority_level: message.priority_level,
                createdAt: message.createdAt,
                User: {
                  id: request.decoded.id,
                  username: request.decoded.username
                }
              }
            });
          default:
            return response.status(200).send({
              newMessage: {
                id: message.id,
                message_body: message.message_body,
                priority_level: message.priority_level,
                createdAt: message.createdAt,
                User: {
                  id: request.decoded.id,
                  username: request.decoded.username
                }
              }
            });
          }
        });
    }).catch(err =>
    response.status(500).send(err, 'An error occurred, try again'));
  }).catch(err =>
    response.status(500).send(err, 'An error occurred, try again'));
};

/**
  * Gets messages
  * @param {Object} request - request.
  * @param {Object} response - response.
  * @returns {messages} - returns message.
 */
// Method to get Messages
exports.getMessages = (request, response) => {
  const groupId = parseInt(request.params.id, 10);
  if (isNaN(groupId)) {
    return response.status(400).send({
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
      return response.status(200).send({
        messages
      });
    }
    return response.status(400).send({ message: 'No messages to display' });
  });
};
