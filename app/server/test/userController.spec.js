import * as userSeeds from '../seeders/userSeeds';

process.env.NODE_ENV = 'test';

const supertest = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app.js');

const request = supertest(app);

const expect = chai.expect;

const User = require('../models').User;
const ForgotPassword = require('../models').ForgotPassword;

chai.use(chaiHttp);

describe('Create User Controller', () => {
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
    request
      .post('/api/v1/user/signup')
      .send(user)
      .expect(201)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.a.property('status');
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message', 'Signup was successful');
        expect(res.body).to.have.a.property('status', true);
        done();
      });
  });

  it('returns error if username already exists', (done) => {
    const user = userSeeds.userExistPayload;
    request
      .post('/api/v1/user/signup')
      .send(user)
      .expect(409)
      .end((err, res) => {
        expect(res.status).to.equal(409);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.a.property('username');
        expect(res.body).to.have.a.property(
          'username',
          'Username already exists',
        );
        done();
      });
  });

  it('returns error if email already exists', (done) => {
    const user = userSeeds.emailExistPayload;
    request
      .post('/api/v1/user/signup')
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

  it('catches server error', (done) => {
    request
      .post('/api/v1/user/signup')
      .send(userSeeds.internalError)
      .expect(500)
      .end((err, res) => {
        expect(res.status).to.equal(500);
        done();
      });
  });
});

describe('Signin Controller', () => {
  before((done) => {
    User.sync({ force: true })
      .then(() => {
        User.create(userSeeds.userData);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
  it('throws error when password is incorrect', (done) => {
    const user = userSeeds.wrongPasswordPayload;
    request
      .post('/api/v1/user/signin')
      .send(user)
      .expect(400)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done(err);
      });
  });
  it('throws error when username does not exist', (done) => {
    const user = userSeeds.wrongUsernamePayload;
    request
      .post('/api/v1/user/signin')
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
    request
      .post('/api/v1/user/signin')
      .send(user)
      .expect(422)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        expect(res.body).to.have.a.property('status');
        expect(res.body).to.have.a.property('status', false);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message', 'Username is required');
        done(err);
      });
  });
  it('throws error when password field is blank', (done) => {
    const user = {
      password: '',
    };
    request
      .post('/api/v1/user/signin')
      .send(user)
      .expect(422)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        expect(res.body).to.have.a.property('status');
        expect(res.body).to.have.a.property('status', false);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message', 'Password is required');
        done(err);
      });
  });
});

describe('Validate Token', () => {
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
    request
      .get(`/api/v1/password/token/check?token=${token.token}`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message', 'Token Found!');
        done(err);
      });
  });
  it('asserts that the token does not exist', (done) => {
    const token = userSeeds.wrongToken;
    request
      .get(`/api/v1/password/token/check?token=${token}`)
      .expect(404)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message', 'Token not found');
        done(err);
      });
  });
  it('should throw error when token is not a string', (done) => {
    const token = '';
    request
      .get(`/api/v1/password/token/check?token=${token}`)
      .expect(400)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message', 'Invalid token');
        done(err);
      });
  });
});

describe('reset password', () => {
  before((done) => {
    User.sync({ force: true })
      .then(() => {
        User.create(userSeeds.userData);
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
    request
      .put('/api/v1/password/verify')
      .send(user)
      .expect(422)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        expect(res.body).to.have.a.property('status');
        expect(res.body).to.have.a.property('status', false);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property(
          'message',
          'New Password is required',
        );
        done(err);
      });
  });
  it('throws error when confirm password is blank', (done) => {
    const user = {
      confirmPassword: '',
    };
    request
      .put('/api/v1/password/verify')
      .send(user)
      .expect(422)
      .end((err, res) => {
        expect(res.status).to.equal(422);
        expect(res.body).to.have.a.property('status');
        expect(res.body).to.have.a.property('status', false);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property(
          'message',
          'Please Confirm your new Password',
        );
        done(err);
      });
  });
  it('throws error when password does not match', (done) => {
    const resetPasswordPayload = userSeeds.resetPasswordPayload;
    request
      .put('/api/v1/password/verify')
      .send(resetPasswordPayload)
      .expect(401)
      .end((err, res) => {
        expect(res.status).to.equal(401);
        expect(res.body).to.have.a.property('status');
        expect(res.body).to.have.a.property('status', false);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property(
          'message',
          'Password does not match',
        );
        done(err);
      });
  });
  it('throws error when user email is not found', (done) => {
    const email = userSeeds.email;
    request
      .put('/api/v1/password/verify')
      .send(email)
      .expect(404)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.have.a.property('message');
        expect(res.body).to.have.a.property('message', 'User not found');
        done(err);
      });
  });
  it("resets user's password ", (done) => {
    const body = userSeeds.body;
    request
      .put('/api/v1/password/verify')
      .send(body)
      .expect(204)
      .end((err, res) => {
        expect(res.status).to.equal(204);
        done(err);
      });
  });
});
