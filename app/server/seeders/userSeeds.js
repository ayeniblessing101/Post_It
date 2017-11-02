
export const userPayload = {
  email: 'blessing@gmail.com',
  phone: '2348064476683',
  username: 'blessing',
  password: '1234'
};
export const newUserPayload = {
  email: 'tobi@gmail.com',
  username: 'tobi',
  password: '1234',
  phoneNo: '2348066193821',
  confirm_password: '1234'
};
export const userExistPayload = {
  email: 'tobi@gmail.com',
  username: 'tobi',
  password: '1234',
  phoneNo: '2348066193821',
  confirm_password: '1234'
};
export const emailExistPayload = {
  email: 'tobi@gmail.com',
  username: 'max',
  password: '1234',
  phoneNo: '2348066193821',
  confirm_password: '1234'
};

export const internalError = {
  email: 'tobi@gmail.com',
  username: 1234,
  password: '1234',
  phoneNo: 86868686868789896878686768677767676767676767,
  confirm_password: '1234'
};

export const userCredential = {
  username: 'John',
  password: '12345'
};

export const wrongPasswordPayload = {
  username: 'John',
  password: 'WRONG_PASSWORD'
};

export const wrongUsernamePayload = {
  username: 'WRONG_USERNAME',
  password: '12345'
};

export const messagePayload = {
  message_body: 'Hello there',
  priority_level: 'Normal'
};

export const checkTokenPayload = {
  reset_password_token: 'f0ca9af363d4d967dd5fb03a70f5885ba5c34c9036969a8bdddb0008b2b51d76',
  reset_password_expires: '1509301259634'
};

export const token = {
  token: 'f0ca9af363d4d967dd5fb03a70f5885ba5c34c9036969a8bdddb0008b2b51d76'
};
