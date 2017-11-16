const Group = require('../models').Group;
const User = require('../models').User;

/**
 * get all the phone number of user in a group
 * @param {*} id - id
 * @param {*} message  - message
 * @param {*} user - user
 *
 * @return {object} - user object with phone number included
 */
function getGroupUserEmail(id, message, user) {
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

module.exports = getGroupUserEmail;
