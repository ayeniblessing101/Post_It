import * as userSeeds from '../seeders/userSeeds';

process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');

const saltRounds = 10;
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(saltRounds);

const app = require('../app.js');

const request = supertest(app);

const expect = chai.expect;

const User = require('../models').User;

chai.use(chaiHttp);


describe('reset password', () => {
  describe('PUT /api/v1/password/verify', () => {
    before((done) => {
      User.sync({ force: true })
       .then(() => {
         User.create({
           email: 'john@mail.net',
           username: 'John',
           password: bcrypt.hashSync('12345', salt)
         });
         done();
       })
       .catch((error) => {
         done(error);
       });
    });

    it('throws error when email field is blank', (done) => {
      const user = {
        newPassword: '',
      };
      request.put('/api/v1/password/verify')
      .send(user)
      .expect(422)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        expect(res.body).to.have.a.property('status');
        expect(res.body).to.have.a.property('status',
        false);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message',
        'New Password is required');
        done(err);
      });
    });

    it('throws error when confirm password is blank', (done) => {
      const user = {
        confirmPassword: '',
      };
      request.put('/api/v1/password/verify')
      .send(user)
      .expect(422)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        expect(res.body).to.have.a.property('status');
        expect(res.body).to.have.a.property('status',
        false);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message',
        'Please Confirm your new Password');
        done(err);
      });
    });

    it('throws error when password does not match', (done) => {
      const resetPasswordPayload = {
        newPassword: 'blessing',
        confirmPassword: '1234'
      };
      request.put('/api/v1/password/verify')
      .send(resetPasswordPayload)
      .expect(401)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body).to.have.a.property('status');
        expect(res.body).to.have.a.property('status',
        false);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message',
        'Password does not match');
        done(err);
      });
    });

    it('throws error when user email is not found', (done) => {
      const email = {
        email: 'jimoh@gmail.com',
      };
      request.put('/api/v1/password/verify')
      .send(email)
      .expect(404)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message',
        'User not found');
        done(err);
      });
    });

    it('resets user\'s password ', (done) => {
      const body = {
        confirmPassword: '12345',
        newPassword: '12345',
        email: 'john@mail.net'
      };
      request.put('/api/v1/password/verify')
      .send(body)
      .expect(204)
      .end((err, res) => {
        expect(res.status).to.equal(204);
        done(err);
      });
    });
  });
});
