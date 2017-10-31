const nodemailer = require('nodemailer');

/**
 * A method to send email when a message is posted
 *
 * @param {any} receivers
 * @param {any} messageBody
 */
function sendMail(receivers, messageBody, priorityLevel) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Ayeni Blessing " <ayeniblessing@gmail.com>',
    to: receivers,
    subject: 'Post It',
    html: `<body style="max-width:100%; color: #000;">
    <div 
      style="background-color:#2FA599; 
      padding:10px; color:white; 
      height: 60px;">
    <h3 style="text-align: center; font-size: 40px; margin-top: 5px;">
      PostIt!
    </h3>
    </div>
    <div 
      style="outline: 0px solid black; 
      padding-left: 20px; padding-right: 30px;">
    <div>
    <h1><strong>Hello</strong></h1>
    </div>
    <p>Hello You have a new ${priorityLevel} message on PostIt</p>
    <p>Message: ${messageBody}</p>
    <div style="align-items: center; width: 100%">
        </div>
        <p style="text-align: right;">Regards, the PostIt team.</p>
        <br>
        <br>
    </div>
    </body>`
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
