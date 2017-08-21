process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app.js');

const request = supertest(app);

const expect = chai.expect;

const User = require('../models').User;

// const should = chai.should();
chai.use(chaiHttp);


describe('Routes: signup', () => {
  describe('POST /api/user/signup', () => {
  // This function will run before every test to clear database
    before((done) => {
      User.sync({ force: true }) // drops table and re-creates it
       .then(() => {
         User.create({
           email: 'blessing@gmail.com',
           phone: '2348064476683',
           username: 'blessing',
           password: '1234'
         });
         done();
       })
       .catch((error) => {
         done(error);
       });
    });
    describe('status 201', () => {
      it('returns a newly created user', (done) => {
      // Test's logic...
        const user = {
          email: 'tobi@gmail.com',
          username: 'tobi',
          password: '1234',
          phoneNo: '2348066193821',
          confirm_password: '1234'
        };
        request.post('/api/user/signup')
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
    });
    describe('status 401', () => {
      it('returns username already exists', (done) => {
      // Test's logic...
        const user = {
          email: 'tobi@gmail.com',
          username: 'tobi',
          password: '1234',
          phoneNo: '2348066193821',
          confirm_password: '1234'
        };
        request.post('/api/user/signup')
        .send(user)
        .expect(400)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.a.property('username');
          expect(res.body).to.have.a.property('username',
          'Username already exists');
          done();
        });
      });
    });
    describe('status 400', () => {
      it('returns email already exists', (done) => {
      // Test's logic...
        const user = {
          email: 'tobi@gmail.com',
          username: 'max',
          password: '1234',
          phoneNo: '2348066193821',
          confirm_password: '1234'
        };
        request.post('/api/user/signup')
        .send(user)
        .expect(400)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.a.property('email');
          expect(res.body).to.have.a.property('email', 'Email already exists');
          done();
        });
      });
    });
  });
});
