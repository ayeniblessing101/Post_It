
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    group_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  });
  Group.associate = (models) => {
    Group.hasMany(models.Message, { foreignKey: 'group_id' });
    Group.belongsToMany(models.User, { as: 'members', through: models.GroupUser, foreignKey: 'group_id' });
  };
  return Group;
};
