import * as userSeeds from '../seeders/userSeeds';

process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app.js');

const request = supertest(app);

const expect = chai.expect;

const User = require('../models').User;

// const userSeeds = require('../seeders/userSeeds');

chai.use(chaiHttp);

describe('user signup', () => {
  describe('POST /api/v1/user/signup', () => {
    before((done) => {
      User.sync({ force: true })
       .then(() => {
         User.create(userSeeds.userPayload);
         done();
       })
       .catch((error) => {
         done(error);
       });
    });

    it('returns a newly created user', (done) => {
      const user = userSeeds.newUserPayload;
      request.post('/api/v1/user/signup')
      .send(user)
      .expect(201)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.a.property('status');
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message',
        'Signup was successful');
        expect(res.body).to.have.a.property('status', true);
        done();
      });
    });

    it('returns error if username already exists', (done) => {
      const user = userSeeds.userExistPayload;
      request.post('/api/v1/user/signup')
      .send(user)
      .expect(409)
      .end((err, res) => {
        expect(res.status).to.equal(409);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.a.property('username');
        expect(res.body).to.have.a.property('username',
        'Username already exists');
        done();
      });
    });

    it('returns error if email already exists', (done) => {
      const user = userSeeds.emailExistPayload;
      request.post('/api/v1/user/signup')
      .send(user)
      .expect(409)
      .end((err, res) => {
        expect(res.status).to.equal(409);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.a.property('email');
        expect(res.body).to.have.a.property('email', 'Email already exists');
        done();
      });
    });

    it('returns error', (done) => {
      request.post('/api/v1/user/signup')
      .send(userSeeds.internalError)
      .expect(500)
      .end((err, res) => {
        expect(res.status).to.equal(500);
        done();
      });
    });
  });
});
