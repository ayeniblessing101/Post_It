
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ForgotPasswords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_email: {
        type: Sequelize.STRING
      },
      reset_password_token: {
        type: Sequelize.STRING
      },
      reset_password_expires: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ForgotPasswords');
  }
};
