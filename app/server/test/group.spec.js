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

describe('Routes: group', () => {
  // This function will run before every test to clear database
  beforeEach((done) => {
    User
    .destroy({ where: {}, truncate: true, cascade: true, restartIdentity: true })
    .then(() => User.create({
      username: 'john',
      email: 'john@gmail.com',
      password: '1234',
      phone: '2348064476683'
    }))
    .then((user) => {
      Group
      .destroy({ where: {}, truncate: true, cascade: true, restartIdentity: true })
      .then(() => Group.bulkCreate([{
        group_name: 'Family',
        user_id: user.dataValues.id
      }, {
        group_name: 'Colleagues',
        user_id: user.dataValues.id
      }]))
      .then((groups) => {
        fakeGroup = groups[0];
        token = jwt.sign({ id: user.dataValues.id }, 'secret');
        done();
      });
    });
  });
  describe('POST /api/group', () => {
    describe('status 200', () => {
      it('creates a new group', (done) => {
        // Test's logic...
        request.post('/api/group')
        .set('Authorization', `Basic ${token}`)
        .send({ groupname: 'Old class mates' })
        .expect(200)
        .end((err, res) => {
          expect(res.body.status).to.equal(true);
          expect(res.body).to.have.a.property('message');
          // expect(res.body.group_name).to.equal('Old class mates');
          // expect(res.body).to.have.a.property('message', 'success');
          done(err);
        });
      });
    });
    describe('status 400', () => {
      it('throws an error when group name exist', (done) => {
    // Test's logic...
        request.post('/api/group')
        .set('Authorization', `Basic ${token}`)
        .send({ groupname: 'Colleagues' })
        .expect(400)
        .end((err, res) => {
          done(err);
        });
      });
    });
  });
});
