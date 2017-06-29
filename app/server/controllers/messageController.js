
const Message = require('../models').Message;

// Method to post message
exports.post_message = (req, res) => {
  if (req.body.message === '') {
    res.status(404).send({ status: false, message: 'message body cannot be empty' });
  }
  const userId = req.decoded.data.id;
  Message.create({
    message_body: req.body.message,
    group_id: req.params.id,
    user_id: userId,
  })
  .then((message) => {
    res.status(200).send({ status: true, message: 'Successful', data: message });
  });
};

// Method to get Messages
exports.get_messages = (req, res) => {
  Message.findAll({
    where: {
      group_id: req.params.id
    },
  })
  .then((messages) => {
    res.status(200).send({ status: true, message: 'Successful', data: messages });
  });
};
