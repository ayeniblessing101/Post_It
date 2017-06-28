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


describe('Routes: signin', () => {
  describe('POST /api/user/signin', () => {
  // This function will run before every test to clear database
    before((done) => {
      User.sync({ force: true }) // drops table and re-creates it
       .then(() => {
         User.create({
           email: 'blessing@gmail.com',
           username: 'blessing',
           password: '1234'
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
        const user = {
          username: 'ayeni',
          password: '1234'
        };
        request.post('/api/user/signin')
        .send(user)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          done(err);
        });
      });
    });
  });
});
