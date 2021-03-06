'use strict';
module.exports = function(sequelize, DataTypes) {
  var ReadMessage = sequelize.define('ReadMessage', {
    message_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ReadMessage;
};
