require('babel-polyfill');

const User = require('../models').User;

const Group = require('../models').Group;
const Message = require('../models').Message;

const jwt = require('jsonwebtoken');

export default async () => {
  await User
  .destroy({
    where: {},
    truncate: true,
    cascade: true,
    restartIdentity: true
  });

  await Group
    .destroy({
      where: {},
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

  await Message
    .destroy({
      where: {},
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

  const user = await User.create({
    username: 'john',
    email: 'john@gmail.com',
    password: '1234',
    phone: '2348064476683'
  });

  const groups = await Group.bulkCreate([{
    id: 1,
    group_name: 'Family',
    user_id: user.dataValues.id
  }, {
    id: 2,
    group_name: 'Colleagues',
    user_id: user.dataValues.id
  }]);


  await Message.bulkCreate([{
    id: 1,
    group_id: groups[0].dataValues.id,
    priority_level: 'Normal',
    message_body: 'Wassup',
    user_id: user.dataValues.id
  }, {
    id: 2,
    group_id: groups[1].dataValues.id,
    priority_level: 'Normal',
    message_body: 'How are you doing',
    user_id: user.dataValues.id
  }]);

  return {
    fakeGroup: groups[0].dataValues,
    token: jwt.sign({ id: user.dataValues.id }, 'secret')
  };
};
