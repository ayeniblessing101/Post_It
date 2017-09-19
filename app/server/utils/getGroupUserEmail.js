const Group = require('../models').Group;
const User = require('../models').User;

function getGroupUserEmail(id, message, user) {
  const emailUsers = [];
  Group.findOne({
    where: {
      id,
    },
    attributes: ['id'],
    include: [{
      model: User,
      as: 'members',
      attributes: ['email', 'phone'],
      through: { attributes: [] }
    }]
  })
  .then((email) => {
    const emails = email.members;
    emails.map((userEmail) => {
      emailUsers.push(userEmail.email);
    });
  });
  return {
    data: {
      id: message.id,
      message_body: message.message_body,
      priority_level: message.priority_level,
      createdAt: message.createdAt,
      User: {
        id: user.id,
        username: user.username
      }
    },
    emailUsers,
  };
}

module.exports = getGroupUserEmail;
