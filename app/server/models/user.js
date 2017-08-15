
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    confirm_password: DataTypes.STRING
  });
  User.associate = (models) => {
      // associations can be defined here
    User.hasMany(models.Message, { foreignKey: 'user_id', as: 'messages' });
    User.hasMany(models.Group, { foreignKey: 'user_id' });
    User.belongsToMany(models.Group, { through: models.GroupUser, as: 'group', foreignKey: 'user_id' });
  };
  return User;
};
