import * as userSeeds from '../seeders/userSeeds';

require('babel-polyfill');

process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app.js');

const request = supertest.agent(app);
const expect = chai.expect;

const User = require('../models').User;
const Group = require('../models').Group;
const Message = require('../models').Message;

const jwt = require('jsonwebtoken');

let token;
let fakeGroup;

chai.use(chaiHttp);

describe('creates a new message', () => {
  // This function will run before every test to clear database
  beforeEach((done) => {
    User.destroy({
      where: {},
      truncate: true,
      cascade: true,
      restartIdentity: true,
    })
      .then(() => User.create(userSeeds.userPayload2))
      .then((user) => {
        Group.destroy({
          where: {},
          truncate: true,
          cascade: true,
          restartIdentity: true,
        })
          .then(() =>
            Group.bulkCreate([
              {
                id: 1,
                group_name: userSeeds.group1,
                user_id: user.dataValues.id,
              },
              {
                id: 2,
                group_name: userSeeds.group2,
                user_id: user.dataValues.id,
              },
            ]),
          )
          .then((groups) => {
            fakeGroup = groups[0].dataValues;
            token = jwt.sign({ id: user.dataValues.id }, 'secret');
            done();
          });
      });
  });
  describe('create a new message', () => {
    describe('create a new message', () => {
      it('creates a message', (done) => {
        // Test's logic...
        request
          .post(`/api/v1/group/${fakeGroup.id}/message`)
          .set('Authorization', `Basic ${token}`)
          .send(userSeeds.messagePayload)
          .expect(200)
          .end((err, res) => {
            expect(res.body.newMessage).to.have.a.property('message_body');
            expect(res.body.newMessage).to.have.a.property('priority_level');
            done(err);
          });
      });

      it('throws an error if group does not exist', (done) => {
        // Test logic...
        request
          .post('/api/v1/group/100/message')
          .set('Authorization', `Basic ${token}`)
          .send(userSeeds.messagePayload)
          .expect(404)
          .end((err) => {
            done(err);
          });
      });
    });
  });
});

describe('gets all messages', () => {
  // This function will run before every test to clear database
  beforeEach(async () => {
    await User.destroy({
      where: {},
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });

    await Group.destroy({
      where: {},
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });

    await Message.destroy({
      where: {},
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });

    const user = await User.create(userSeeds.userPayload2);

    const groups = await Group.bulkCreate([
      {
        id: 1,
        group_name: userSeeds.group1,
        user_id: user.dataValues.id,
      },
      {
        id: 2,
        group_name: userSeeds.group2,
        user_id: user.dataValues.id,
      },
    ]);

    await Message.bulkCreate([
      {
        id: 1,
        group_id: groups[0].dataValues.id,
        priority_level: userSeeds.priorityLevel,
        message_body: userSeeds.messageBody2,
        user_id: user.dataValues.id,
      },
      {
        id: 2,
        group_id: groups[1].dataValues.id,
        priority_level: userSeeds.priorityLevel,
        message_body: userSeeds.messageBody2,
        user_id: user.dataValues.id,
      },
    ]);

    fakeGroup = groups[0].dataValues;
    token = jwt.sign({ id: user.dataValues.id }, 'secret');
  });

  describe('Gets all messages', () => {
    describe('get all messages', () => {
      it('returns a list a messages', async () => {
        // Test logic...
        await request
          .get(`/api/v1/group/${fakeGroup.id}/messages`)
          .set('Authorization', `Basic ${token}`)
          .expect(200)
          .then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.have.a.property('messages');
            expect(res.body.messages).to.be.an('array');
          });
      });
    });
  });
});
