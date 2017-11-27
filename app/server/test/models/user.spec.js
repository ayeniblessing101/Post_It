import chai from 'chai';
import isUUID from 'chai-uuid';
import models from '../../models';

chai.use(isUUID);
const expect = chai.expect;
const User = models.User;

describe('A newly created user', () => {
  const user = new User({
    username: 'blessing',
    email: 'blessing.ayeni@andela.com',
    phone: '2348064476683',
    password: '12345',
    confirm_password: '12345',
  });
  it('should be an instance of User model', () => {
    expect(user).to.be.an.instanceof(User);
  });
  it('should be an instance of Sequelize.Model', () => {
    expect(user).to.be.an.instanceof(models.Sequelize.Model);
  });
  it('should have a username property', () => {
    expect(user).to.have.property('username');
  });
  it('should have an email property', () => {
    expect(user).to.have.property('email');
  });
  it('should have a password property', () => {
    expect(user).to.have.property('password');
  });
  it('should have a password property', () => {
    expect(user).to.have.property('confirm_password');
  });
  it('should have a phone property', () => {
    expect(user).to.have.property('phone');
  });
  it('should have a createdAt property', () => {
    expect(user).to.have.property('createdAt');
  });
  it('should have an updatedAt property', () => {
    expect(user).to.have.property('updatedAt');
  });
  it('should have association method for `Message` model', () => {
    expect(user.getMessages).to.be.a('function');
  });
  it('should have association methods for `Group` model', () => {});
  it('should define properties from argument to constructor', () => {
    expect(user.username).to.equal('blessing');
    expect(user.email).to.equal('blessing.ayeni@andela.com');
    expect(user.phone).to.equal('2348064476683');
    expect(user.password).to.equal('12345');
    expect(user.confirm_password).to.equal('12345');
  });
});

describe('User model', () => {
  before(() => {
    return User.truncate({ cascade: true, logging: false }).then(() => {
      return User.create({
        username: 'blessing',
        email: 'blessing.ayeni@andela.com',
        phone: '2348064476683',
        password: '12345',
        confirm_password: '12345',
      });
    });
  });
  it('should save a valid user to database without errors', () => {
    return User.findById('blessing').then((fromDb) => {
      expect(fromDb.email).to.equal('blessing.ayeni@andela.com');
      expect(fromDb.phoneNo).to.equal('2348064476683');
    });
  });
});
