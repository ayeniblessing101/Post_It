import Nexmo from 'nexmo';

export default function sendSMS() {
  const API_KEY = '81f335cf';
  const API_SECRET = 'b179a2d1fdb4c7b3';

  const nexmo = new Nexmo({
    apiKey: API_KEY,
    apiSecret: API_SECRET,
  });

  const from = 'Nexmo';
  const to = 234806447683;
  const text = 'A text message sent using the Nexmo SMS API';

  nexmo.message.sendSms(from, to, text);
}
