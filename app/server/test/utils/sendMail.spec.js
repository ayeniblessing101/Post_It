import chai from 'chai';
import chaiHttp from 'chai-http';
import sendMail from '../../utils/sendMail';

chai.use(chaiHttp);

describe('sendMail', () => {
  describe('function', () => {
    it('should be a function', () => {
      sendMail.should.be.a('function');
    });
    it('should send an email if all conditions are met', () => {
      const receivers = [{ user: 'blessing.ayeni@andela.com' }];
      const messageBody = 'Hello World';
      const priorityLevel = 'Normal';
      const mailer = sendMail(receivers, messageBody, priorityLevel);

      mailer.should.be.equal(true);
    });
  });
});
