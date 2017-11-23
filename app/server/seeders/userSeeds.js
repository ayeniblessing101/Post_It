const saltRounds = 10;
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(saltRounds);

export const userPayload = {
  email: 'blessing@gmail.com',
  phone: '2348064476683',
  username: 'blessing',
  password: '1234',
};
export const newUserPayload = {
  email: 'tobi@gmail.com',
  username: 'tobi',
  password: '1234',
  phoneNo: '2348066193821',
  confirm_password: '1234',
};
export const userExistPayload = {
  email: 'tobi@gmail.com',
  username: 'tobi',
  password: '1234',
  phoneNo: '2348066193821',
  confirm_password: '1234',
};
export const emailExistPayload = {
  email: 'tobi@gmail.com',
  username: 'max',
  password: '1234',
  phoneNo: '2348066193821',
  confirm_password: '1234',
};

export const internalError = {
  email: 'tobi@gmail.com',
  username: 1234,
  password: '1234',
  phoneNo: 86868686868789896878686768677767676767676767,
  confirm_password: '1234',
};

export const userCredential = {
  username: 'John',
  password: '12345',
};

export const wrongPasswordPayload = {
  username: 'John',
  password: '908hhiiiiuyytttggjj',
};

export const wrongUsernamePayload = {
  username: 'WRONG_USERNAME',
  password: '12345',
};

export const messagePayload = {
  message_body: 'Hello there',
  priority_level: 'Normal',
};

export const checkTokenPayload = {
  reset_password_token:
    'f0ca9af363d4d967dd5fb03a70f5885ba5c34c9036969a8bdddb0008b2b51d76',
  reset_password_expires: '1509301259634',
};

export const token = {
  token: 'f0ca9af363d4d967dd5fb03a70f5885ba5c34c9036969a8bdddb0008b2b51d76',
};

export const userData = {
  email: 'john@mail.net',
  username: 'John',
  password: bcrypt.hashSync('12345', salt),
};

export const wrongToken = '1234';

export const resetPasswordPayload = {
  newPassword: 'blessing',
  confirmPassword: '1234',
};

export const email = {
  email: 'jimoh@gmail.com',
};

export const body = {
  confirmPassword: '12345',
  newPassword: '12345',
  email: 'john@mail.net',
};

export const userPayload2 = {
  username: 'john',
  email: 'john@gmail.com',
  password: '1234',
  phone: '2348064476683',
};

export const group1 = 'Family';

export const group2 = 'Colleagues';

export const username1 = 'blessing';

export const username2 = 'tomi';

export const priorityLevel = 'Normal';

export const messageBody1 = 'Wassup';

export const messageBody2 = 'How are you doing';

export const groupImage1 =
  'https://res.cloudinary.com/blessing/image/upload/v1510719784/bqaoxgb69x0qsjkabtga.png';

export const groupImage2 =
  'https://res.cloudinary.com/blessing/image/upload/v1510719813/scdrj8io1xgjze9tawss.png';

export const newGroup = {
  group_name: 'Andela',
  image:
    'https://res.cloudinary.com/blessing/image/upload/v1510719813/scdrj8io1xgjze9tawss.png',
  user_id: 1,
};

export const newMessage = {
  id: 1,
  message_body: 'This is the first message',
  priority: 'urgent',
  group_id: 1,
  user_id: 1,
};
