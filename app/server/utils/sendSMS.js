const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '81f335cf',
  apiSecret: 'b179a2d1fdb4c7b3',
});

/**
 * Send SMS to everyone in a group
 * @param {*} numbers - numbers
 * @param {*} messageBody - messageBody
 *
 * @return {void}
 */
function sendSMS(numbers, messageBody) {
  const from = 'Post It';
  const to = numbers;
  const text = messageBody;

  nexmo.message.sendSms(from, to, text);
}

module.exports = sendSMS;
