
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message_body: DataTypes.TEXT,
    group_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  });

  Message.associate = (models) => {
      // associations can be defined here
    Message.belongsTo(models.Group, { foreignKey: 'group_id', onDelete: 'CASCADE' });
    Message.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
  };
  return Message;
};
