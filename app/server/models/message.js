
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message_body: DataTypes.TEXT,
    group_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Message;
};
