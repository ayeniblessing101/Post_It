import chai from 'chai';
import isUUID from 'chai-uuid';
import models from '../../models';

chai.use(isUUID);
const expect = chai.expect;
const Message = models.Message;

describe('A newly created message', () => {
  const message = new Message({
    id: 1,
    message_body: 'This is the first message',
    priority_level: 'urgent',
    group_id: 1,
    user_id: 1,
  });
  const yetAnotherMessage = new Message({
    message_body: 'This is the second message',
  });
  it('should be an instance of message model', () => {
    expect(message).to.be.an.instanceof(Message);
  });
  it('should be an instance of Sequelize.Model', () => {
    expect(message).to.be.an.instanceof(models.Sequelize.Model);
  });
  it('should have an `id` property', () => {
    expect(message).to.have.property('id');
  });
  it('should have a `message_body` property', () => {
    expect(message).to.have.property('message_body');
  });
  it('should have a `group_id` property', () => {
    expect(message).to.have.property('group_id');
  });
  it('should have a `user_id` property', () => {
    expect(message).to.have.property('user_id');
  });
  it('should have a `priority` property', () => {
    expect(message).to.have.property('priority');
  });
  it('should have a `createdAt` property', () => {
    expect(message).to.have.property('createdAt');
  });
  it('should have an `updatedAt` property', () => {
    expect(message).to.have.property('updatedAt');
  });
  it('should have association methods for `User` model', () => {
    expect(message.getUsers).to.be.a('function');
    expect(message.addUsers).to.be.a('function');
  });
  it('should define properties from argument to constructor', () => {
    expect(message.message_body).to.equal('This is the first message');
    expect(yetAnotherMessage.message_body).to.equal(
      'This is the second message',
    );
    expect(message.priority_level).to.equal('urgent');
  });
});

describe('Message Model', () => {
  before(() => {
    return Message.truncate({ cascade: true, logging: false }).then(() => {
      return Message.create({
        id: 1,
        message_body: 'Please cough go away',
        group_id: 1,
        user_id: 1,
      });
    });
  });
  it('should save a valid message to database without errors', () => {
    return Message.findById(1).then((fromDb) => {
      expect(fromDb.message_body).to.equal('Please cough go away');
      expect(fromDb.group_id).to.equal(1);
      expect(fromDb.user_id).to.equal(1);
      expect(fromDb.priority_level).to.equal('normal');
    });
  });
});
