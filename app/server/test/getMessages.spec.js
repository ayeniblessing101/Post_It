process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const chai = require('chai');

const app = require('../app.js');

const request = supertest.agent(app);
const expect = chai.expect;
const User = require('../models').User;

const Group = require('../models').Group;
const Message = require('../models').Message;

const jwt = require('jsonwebtoken');

let token;
let fakeGroup;

describe('Routes: get_messages', () => {
  // This function will run before every test to clear database
  beforeEach(async () => {
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

    fakeGroup = groups[0].dataValues;
    token = jwt.sign({ id: user.dataValues.id }, 'secret');
  });

  describe('GET /api/v1/group/:id/messages', () => {
    describe('status 200', () => {
      it('returns a list a messages', async () => {
        // Test logic...
        await request.get(`/api/v1/group/${fakeGroup.id}/messages`)
          .set('Authorization', `Basic ${token}`)
          .expect(200)
          .then((res) => {
            console.log(res.body);
            expect(res.status).to.equal(200);
            // expect(res.body[0].message_body).to.eql('Testing Testin');
            // expect(res.body[1].message_body).to.eql('Hello');
          });
      });
    });
  });
});
