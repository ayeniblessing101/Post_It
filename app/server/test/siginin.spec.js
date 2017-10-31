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

// const should = chai.should();
chai.use(chaiHttp);


describe('Routes: signin', () => {
  describe('POST /api/v1/user/signin', () => {
  // This function will run before every test to clear database
    before((done) => {
      // drops table and re-creates it
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
    describe('status 200', () => {
      it('returns authenticated user token', (done) => {
      // Test's logic...
        const users = {
          username: 'John',
          password: '12345'
        };
        request.post('/api/v1/user/signin')
        .send(users)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.include.keys('token');
          done(err);
        });
      });
    });
    describe('status 400', () => {
      it('throws error when password is incorrect', (done) => {
      // Test logic...
        const user = {
          username: 'John',
          password: 'WRONG_PASSWORD'
        };
        request.post('/api/v1/user/signin')
        .send(user)
        .expect(400)
        .end((err) => {
          done(err);
        });
      });
    });
    describe('status 404', () => {
      it('throws error when username does not exist', (done) => {
      // Test's logic...
        const user = {
          username: 'WRONG_USERNAME',
          password: '12345'
        };
        request.post('/api/v1/user/signin')
        .send(user)
        .expect(404)
        .end((err) => {
          done(err);
        });
      });
    });
    describe('status 400', () => {
      it('throws error when username field is blank', (done) => {
        const user = {
          username: '',
        };
        request.post('/api/v1/user/signin')
        .send(user)
        .expect(400)
        .end((err) => {
          done(err);
        });
      });
    });
    describe('status 400', () => {
      it('throws error when password field is blank', (done) => {
        const user = {
          password: ''
        };
        request.post('/api/v1/user/signin')
        .send(user)
        .expect(400)
        .end((err) => {
          done(err);
        });
      });
    });
  });
});
