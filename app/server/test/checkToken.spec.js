import * as userSeeds from '../seeders/userSeeds';

process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app.js');

const request = supertest(app);

const expect = chai.expect;

const ForgotPassword = require('../models').ForgotPassword;

chai.use(chaiHttp);


describe('check for valid token', () => {
  describe('GET /password/token/check', () => {
    before((done) => {
      ForgotPassword.sync({ force: true })
       .then(() => {
         ForgotPassword.create(userSeeds.checkTokenPayload);
         done();
       })
       .catch((error) => {
         done(error);
       });
    });

    it('asserts that the token exists', (done) => {
      const token = userSeeds.token;
      request.get(`/api/v1/password/token/check?token=${token.token}`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message',
        'Token Found!');
        done(err);
      });
    });

    it('asserts that the token does not exist', (done) => {
      const token = '1234';
      request.get(`/api/v1/password/token/check?token=${token}`)
      .expect(404)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message',
        'Token not found');
        done(err);
      });
    });

    it('should throw error when token is not a string', (done) => {
      const token = '';
      request.get(`/api/v1/password/token/check?token=${token}`)
      .expect(400)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message',
        'Invalid token');
        done(err);
      });
    });
  });
});
