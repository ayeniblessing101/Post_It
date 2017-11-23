const nodemailer = require('nodemailer');

/**
 * send mail to user to reset password
 * @param {*} receiver - receiver
 * @param {*} messageBody - message body
 *
 * @return {object} - message success or error on failure
 */
export default function forgotPasswordMail(receiver, messageBody) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'ayeniblessing32@gmail.com',
      pass: 'Welcome3000#',
    },
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Ayeni Blessing 👻" <ayeniblessing@gmail.com>',
    to: receiver, // list of receivers
    subject: 'Post It - Reset Password',
    text: messageBody,
    html: messageBody,
  };

  // send mail with defined transport object
  transporter.forgotPasswordMail(mailOptions, (error, info) => {
    if (error) {
      return error;
    }
    return `Message ${info.messageId} sent: ${info.response}`;
  });
}
