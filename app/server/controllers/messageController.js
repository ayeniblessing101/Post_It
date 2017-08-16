
const Message = require('../models').Message;
const User = require('../models').User;
const Group = require('../models').Group;
// Method to post message
exports.post_message = (req, res) => {
  console.log(req.body.message)
  if (req.body.message === '') {
    return res.status(404).send({ status: false, message: 'message body cannot be empty' });
  }
  const userId = req.decoded.data.id;
  Group.findById(req.params.id)
  .then((group) => {
    if (!group) {
      return res.send({
        status: 400,
        message: 'You cannot post to a group that does not exists'
      })
    }
  });
  Message.create({
    message_body: req.body.message,
    group_id: req.params.id,
    user_id: userId,
  })
  .then((message) => {
    return res.status(201).send({
      data: {
        id: message.id,
        message_body: message.message_body,
        createdAt: message.createdAt,
        User: {
          id: req.decoded.data.id,
          username: req.decoded.data.username
        }
      }
    })
  })
  // return res.status(200).send({ status: true, message: 'Successful', data: message });
  .catch((err) => {
    return res.status(500).send(err, 'An error occurred, try again');
  });
  // .catch((err) => {
  //   return res.status(500).send(err, 'An error occurred, try again');
  // });
};

// Method to get Messages
exports.get_messages = (req, res) => {
  // console.log(req.params.id);
  Message.findAll({
    where: {
      group_id: req.params.id
    },
    attributes: ['id', 'message_body', 'createdAt'],
    include: [{
      model: User,
      attributes: ['id', 'username', 'email'],
    }]
  })
  .then((messages) => {
    res.status(200).send({ status: true, message: 'Successful', data: messages });
  });
};
