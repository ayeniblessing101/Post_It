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

describe('Routes: add_user', () => {
  // This function will run before every test to clear database
  beforeEach((done) => {
    User
    .destroy({ where: {},
      truncate: true,
      cascade: true,
      restartIdentity: true })
    .then(() => User.create({
      email: 'blessing@gmail.com',
      phone: '2348064476683',
      username: 'blessing',
      password: '1234'
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
  describe('POST /api/group/:id/user', () => {
    describe('status 201', () => {
      it('adds a user to a group', (done) => {
        // Test's logic...
        request.post(`/api/group/${fakeGroup.id}/user`)
        .set('Authorization', `Basic ${token}`)
        .send({
          username: 'blessing',
        })
        .expect(201)
        .end((err, res) => {
          expect(res.body.status).to.equal(true);
          expect(res.body).to.have.a.property('message');
          expect(res.body).to.have.a.property('message',
          'User has been successfully added to group');
          // expect(res.body.group_name).to.equal('Old class mates');
          // expect(res.body).to.have.a.property('message', 'success');
          done(err);
        });
      });
    });
    describe('status 401', () => {
      it('throws an error if User has already been added to this group',
      (done) => {
    // Test's logic...
        request.post(`/api/group/${fakeGroup.id}/user`)
        .set('Authorization', `Basic ${token}`)
        .send({ username: 'blessing' })
        .expect(401)
        .end((err, res) => {
          expect(res.body.status).to.equal(true);
          done(err);
        });
      });
    });
    describe('status 404', () => {
      it('throws an error if User does not exist',
      (done) => {
    // Test's logic...
        request.post(`/api/group/${fakeGroup.id}/user`)
        .set('Authorization', `Basic ${token}`)
        .send({ username: 'tomi' })
        .expect(404)
        .end((err) => {
          done(err);
        });
      });
    });
    describe('status 401', () => {
      it('throws an error if text field is empty',
      (done) => {
    // Test's logic...
        request.post(`/api/group/${fakeGroup.id}/user`)
        .set('Authorization', `Basic ${token}`)
        .send({ username: '' })
        .expect(401)
        .end((err) => {
          done(err);
        });
      });
    });
  });
});
