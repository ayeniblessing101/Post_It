const nodemailer = require('nodemailer');

function sendMail(receivers, messageBody) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
      user: 'ayeniblessing32@gmail.com',
      pass: 'Welcome3000#'
    }
  });


  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Ayeni Blessing " <ayeniblessing@gmail.com>', // sender address
    to: receivers, // list of receivers
    subject: 'Post It', // Subject line
    text: messageBody, // plain text body
    html: messageBody // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info, res) => {
    if (error) {
      return res.send(error);
    }
    res.send('Message %s sent: %s', info.messageId, info.response);
  });
}

module.exports = sendMail;
