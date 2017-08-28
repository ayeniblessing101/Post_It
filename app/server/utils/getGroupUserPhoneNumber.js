const Group = require('../models').Group;
const User = require('../models').User;

export default function getGroupUserEmail(id, message, user) {
  const userPhoneNumbers = [];
  Group.findOne({
    where: {
      id,
    },
    attributes: ['id'],
    include: [{
      model: User,
      as: 'members',
      attributes: ['phone'],
      through: { attributes: [] }
    }]
  })
  .then((phone) => {
    const phoneNumbers = phone.members;
    phoneNumbers.map((phoneNumber) => {
      userPhoneNumbers.push(phoneNumber.phone);
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
    userPhoneNumbers,
  };
}
