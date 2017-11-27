import chai from 'chai';
import isUUID from 'chai-uuid';
import models from '../../models';

chai.use(isUUID);
const expect = chai.expect;
const ForgotPassword = models.ForgotPassword;

describe('A newly created token', () => {
  const forgotPassword = new ForgotPassword({
    user_email: 'blessing.ayeni@andela.com',
    reset_password_token: '',
    reset_password_expires: '',
  });
  it('should be an instance of Group model', () => {
    expect(forgotPassword).to.be.an.instanceof(ForgotPassword);
  });
  it('should be an instance of Sequelize.Model', () => {
    expect(forgotPassword).to.be.an.instanceof(models.Sequelize.Model);
  });
  it('should have an id property', () => {
    expect(forgotPassword).to.have.property('id');
  });
  it('should have a createdAt property', () => {
    expect(forgotPassword).to.have.property('createdAt');
  });
  it('should have an updatedAt property', () => {
    expect(forgotPassword).to.have.property('updatedAt');
  });
  it(
    'should have properties user_email, reset_password_token ' +
      'and reset_password_expires',
    () => {
      expect(forgotPassword).to.have.property('user_email');
      expect(forgotPassword).to.have.property('reset_password_token');
      expect(forgotPassword).to.have.property('reset_password_expires');
    },
  );
  it('should define properties from argument to constructor', () => {
    expect(forgotPassword.user_email).to.equal('blessing.ayeni@andela.com');
    expect(forgotPassword.reset_password_token).to.equal();
    expect(forgotPassword.reset_password_token).to.equal();
  });
});

describe('Forgotpassword model', () => {
  before(() => {
    return ForgotPassword.truncate({
      cascade: true,
      logging: false,
    }).then(() => {
      return ForgotPassword.create({});
    });
  });
  it('should save a new token to the database without errors', () => {
    return ForgotPassword.findById(1).then((fromDb) => {
      expect(fromDb.user_email).to.equal('blessing.ayeni@andela.com');
      expect(fromDb.reset_password_token).to.equal('');
      expect(fromDb.reset_password_expires).to.equal();
    });
  });
});
