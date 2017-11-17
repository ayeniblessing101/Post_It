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

describe('Group', () => {
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
                group_name: userSeeds.group1,
                image: userSeeds.groupImage1,
                user_id: user.dataValues.id,
              },
              {
                group_name: userSeeds.group2,
                image: userSeeds.groupImage2,
                user_id: user.dataValues.id,
              },
            ]),
          )
          .then((groups) => {
            fakeGroup = groups[0];
            token = jwt.sign({ id: user.dataValues.id }, 'secret');
            done();
          });
      });
  });
  describe('POST /api/v1/group', () => {
    describe('a creating new group', () => {
      it('creates a new group', (done) => {
        // Test's logic...
        request
          .post('/api/v1/group')
          .set('Authorization', `Basic ${token}`)
          .send({ groupname: 'Old class mates' })
          .expect(201)
          .end((err, res) => {
            expect(res.body.status).to.equal(true);
            expect(res.body).to.have.a.property('message');
            done(err);
          });
      });
    });
    describe('Group', () => {
      it('should throw an error when group name exist', (done) => {
        // Test's logic...
        request
          .post('/api/v1/group')
          .set('Authorization', `Basic ${token}`)
          .send({ groupname: userSeeds.group2 })
          .expect(409)
          .end((err) => {
            done(err);
          });
      });
    });
  });
});

describe('adding user to a group', () => {
  // This function will run before every test to clear database
  beforeEach((done) => {
    User.destroy({
      where: {},
      truncate: true,
      cascade: true,
      restartIdentity: true,
    })
      .then(() => User.create(userSeeds.userPayload))
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
                image: userSeeds.groupImage1,
                user_id: user.dataValues.id,
              },
              {
                id: 2,
                group_name: userSeeds.group2,
                image: userSeeds.groupImage2,
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
  describe('Adding user to a group', () => {
    describe('Adding user to a group', () => {
      it('should return success message when a user is successfully added to a group', (done) => {
        // Test logic...
        request
          .post(`/api/v1/group/${fakeGroup.id}/user`)
          .set('Authorization', `Basic ${token}`)
          .send({
            username: userSeeds.username1,
          })
          .expect(200)
          .end((err, res) => {
            expect(res.body.status).to.equal(true);
            expect(res.body).to.have.a.property('message');
            expect(res.body).to.have.a.property(
              'message',
              'User has been successfully added to group',
            );
            done(err);
          });
      });

      it('throws an error if User does not exist', (done) => {
        // Test logic...
        request
          .post(`/api/v1/group/${fakeGroup.id}/user`)
          .set('Authorization', `Basic ${token}`)
          .send({ username: userSeeds.username2 })
          .expect(404)
          .end((err, res) => {
            expect(res.status).to.equal(404);
            expect(res.body).to.have.a.property('message');
            expect(res.body).to.have.a.property(
              'message',
              'User does not exist',
            );
            done(err);
          });
      });

      it('throws an error if text field is empty', (done) => {
        // Test logic...
        request
          .post(`/api/v1/group/${fakeGroup.id}/user`)
          .set('Authorization', `Basic ${token}`)
          .send({ username: '' })
          .expect(400)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.have.a.property('message');
            expect(res.body).to.have.a.property(
              'message',
              'username or email is required',
            );
            done(err);
          });
      });
    });
  });
});
