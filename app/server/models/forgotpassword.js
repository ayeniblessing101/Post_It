'use strict';
module.exports = (sequelize, DataTypes) => {
  const ForgotPassword = sequelize.define('ForgotPassword', {
    user_email: DataTypes.STRING,
    reset_password_token: DataTypes.STRING,
    reset_password_expires: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return ForgotPassword;
};
