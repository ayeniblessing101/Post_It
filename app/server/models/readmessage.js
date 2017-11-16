
module.exports = (sequelize, DataTypes) => {
  const ReadMessage = sequelize.define('ReadMessage', {
    message_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: () => {
        // associations can be defined here
      }
    }
  });
  return ReadMessage;
};
