const nodemailer = require('nodemailer');

function sendMail(receivers, messageBody) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'ayeniblessing32@gmail.com',
      pass: 'Welcome3000#'
    }
  });


  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Ayeni Blessing " <ayeniblessing@gmail.com>',
    to: receivers,
    subject: 'Post It',
    text: messageBody,
    html: messageBody
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return {
        status: 400,
        payload: error
      };
    }
    return {
      status: 'Message %s sent: %s',
      payload: info
    };
  });
}

module.exports = sendMail;
