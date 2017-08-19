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
// const should = chai.should();
chai.use(chaiHttp);

describe('Routes: get_messages', () => {
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
        Message
        .destroy({ where: {},
          truncate: true,
          cascade: true,
          restartIdentity: true })
        .then(() => Message.bulkCreate([{
          id: 1,
          group_id: groups[0].dataValues.id,
          message_body: 'Family over everything',
          user_id: user.dataValues.id
        }, {
          id: 2,
          group_id: groups[1].dataValues.id,
          message_body: 'God First',
          user_id: user.dataValues.id
        }]));
        fakeGroup = groups[0].dataValues;
        token = jwt.sign({ id: user.dataValues.id }, 'secret');
        done();
      });
    });
  });
  describe('GET /api/group/:id/messages', () => {
    describe('status 200', () => {
      it('returns a list a messages', (done) => {
        // Test's logic...
        request.get(`/api/group/${fakeGroup.id}/message`)
        .set('Authorization', `Basic ${token}`)
        .expect(200)
        .end((err, res) => {
          console.log(res.body);
          expect(res.body.status).to.equal(true);
          expect(res.body[0].message_body).to.eql('Testing Testin');
          expect(res.body[1].message_body).to.eql('Hello');
          done(err);
        });
      });
    });
  });
});
