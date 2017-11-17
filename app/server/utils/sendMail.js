const nodemailer = require('nodemailer');

/**
 * A method to send email when a message is posted
 *
 * @param {any} receivers
 * @param {any} messageBody
 * @param {any} priorityLevel
 *
 * @returns {object} - returns success message and payload
 */
function sendMail(receivers, messageBody, priorityLevel) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Ayeni Blessing " <ayeniblessing@gmail.com>',
    to: receivers,
    subject: 'Post It',
    html: `<body><div>
      <div style="background-color:#f2f3f5;padding:20px">
        <div style="max-width:600px;margin:0 auto">
          <div 
          style="
            background:#fff;
            font:14px sans-serif;
            color:#686f7a;
            border-top:4px solid #3F4256;
            margin-bottom:20px">
          <div 
            style="
              border-bottom:1px solid #f2f3f5;
              padding-bottom:20px;
              padding-top:20px">
            <h4 
              style="
                padding-top:0; 
                padding-left:20px; 
                margin:0; 
                font-size:30px;">PostIt</h4>
          </div>
          <div style="padding:30px 20px;line-height:1.5em;color:#686f7a">
            <p style="color:#737373">Hi,</p>
            <p 
              style="
                border-bottom:1px solid #f2f3f5;
                padding-bottom:20px;
                margin-bottom:20px;
                color:#686f7a">
                You have a new ${priorityLevel} message on PostIt
            </p>
            <p 
              style="
                border-bottom:1px solid #f2f3f5;
                padding-bottom:20px;
                margin-bottom:20px;
                color:#686f7a">
                Message: ${messageBody}.
            </p>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    </body>`,
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return {
        status: 400,
        payload: error,
      };
    }
    return {
      status: 'Message %s sent: %s',
      payload: info,
    };
  });
}

module.exports = sendMail;
