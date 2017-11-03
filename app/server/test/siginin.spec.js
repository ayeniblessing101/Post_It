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


describe('user signin', () => {
  describe('POST /api/v1/user/signin', () => {
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

    it('throws error when password is incorrect', (done) => {
      const user = userSeeds.wrongPasswordPayload;
      request.post('/api/v1/user/signin')
      .send(user)
      .expect(400)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done(err);
      });
    });

    it('throws error when username does not exist', (done) => {
      const user = userSeeds.wrongUsernamePayload;
      request.post('/api/v1/user/signin')
      .send(user)
      .expect(404)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.have.a.property('errors');
        done(err);
      });
    });

    it('throws error when username field is blank', (done) => {
      const user = {
        username: '',
      };
      request.post('/api/v1/user/signin')
      .send(user)
      .expect(422)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        expect(res.body).to.have.a.property('status');
        expect(res.body).to.have.a.property('status',
        false);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message',
        'Username is required');
        done(err);
      });
    });

    it('throws error when password field is blank', (done) => {
      const user = {
        password: ''
      };
      request.post('/api/v1/user/signin')
      .send(user)
      .expect(422)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        expect(res.body).to.have.a.property('status');
        expect(res.body).to.have.a.property('status',
        false);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message',
        'Password is required');
        done(err);
      });
    });
  });
});
