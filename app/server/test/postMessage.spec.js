import * as userSeeds from '../seeders/userSeeds';

process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app.js');

const request = supertest.agent(app);
const expect = chai.expect;

const User = require('../models').User;
const Group = require('../models').Group;

const jwt = require('jsonwebtoken');

let token;
let fakeGroup;
// const should = chai.should();
chai.use(chaiHttp);

describe('Routes: post_message', () => {
  // This function will run before every test to clear database
  beforeEach((done) => {
    User
    .destroy({ where: {},
      truncate: true,
      cascade: true,
      restartIdentity: true })
    .then(() => User.create({
      username: 'john',
      email: 'john@gmail.com',
      password: '1234',
      phone: '2348064476683'
    }))
    .then((user) => {
      Group
      .destroy({ where: {},
        truncate: true,
        cascade: true,
        restartIdentity: true })
      .then(() => Group.bulkCreate([{
        id: 1,
        group_name: 'Family',
        user_id: user.dataValues.id
      }, {
        id: 2,
        group_name: 'Colleagues',
        user_id: user.dataValues.id
      }]))
      .then((groups) => {
        fakeGroup = groups[0].dataValues;
        token = jwt.sign({ id: user.dataValues.id }, 'secret');
        done();
      });
    });
  });
  describe('POST /api/v1/group/:id/message', () => {
    describe('status 200', () => {
      it('post a message', (done) => {
        // Test's logic...
        request.post(`/api/v1/group/${fakeGroup.id}/message`)
        .set('Authorization', `Basic ${token}`)
        .send(userSeeds.messagePayload)
        .expect(200)
        .end((err, res) => {
          expect(res.body.data).to.have.a.property('message_body');
          expect(res.body.data).to.have.a.property('priority_level');
          done(err);
        });
      });

      it('throws an error if group does not exist', (done) => {
        // Test logic...
        request.post('/api/v1/group/0/message')
        .set('Authorization', `Basic ${token}`)
        .send(userSeeds.messagePayload)
        .expect(404)
        .end((err, res) => {
          done(err);
        });
      });
    });
  });
});
