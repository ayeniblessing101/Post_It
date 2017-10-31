process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app.js');

const request = supertest.agent(app);

const User = require('../models').User;

chai.use(chaiHttp);

describe('Checks User Exit', () => {
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
  describe('POST /api/v1/user/signup/:id', () => {
    describe('status 200', () => {
      it('check if a user exist', (done) => {
        // Test's logic...
        request.get('/api/v1/user/signup/blessing')
        .send({
          username: 'blessing',
        })
        .expect(200)
        .end((err, res) => {
          // expect(res.body.data).to.have.a.property('message_body');
          // expect(res.body.data).to.have.a.property('priority_level');
          done(err);
        });
      });
    });
  });
});
