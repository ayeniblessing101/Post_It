process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app.js');

const request = supertest(app);
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
    .destroy({ where: {} })
    .then(() => User.create({
      username: 'john',
      email: 'john@gmail.com',
      password: '1234'
    }))
    .then((user) => {
      Group
      .destroy({ where: {} })
      .then(() => Group.bulkCreate([{
        id: 1,
        group_name: 'Family',
        user_id: user.id
      }, {
        id: 2,
        group_name: 'Colleagues',
        user_id: user.id
      }]))
      .then((groups) => {
        fakeGroup = groups[0];
        token = jwt.sign({ id: user.id }, 'secret');
        done();
      });
    });
  });
  describe('POST /api/group', () => {
    describe('status 200', () => {
      it('creates a new group', (done) => {
        // Test's logic...
        request.post('/api/group')
        .set('Authorization', `JWT ${token}`)
        .send({ group_name: 'Old class mates' })
        .expect(200)
        .end((err, res) => {
          expect(res.body.error).to.equal(false);
          expect(res.body).to.have.a.property('message');
          // expect(res.body.group_name).to.equal('Old class mates');
          // expect(res.body).to.have.a.property('message', 'success');
          done(err);
        });
      });
    });
    describe('status 401', () => {
      it('throws error when group name exist', (done) => {
    // Test's logic...
        request.post('/api/group')
        .set('Authorization', `JWT ${token}`)
        .send({ group_name: 'Old class mates' })
        .expect(401)
        .end((err, res) => {
          done(err);
        });
      });
    });
  });
});
