
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message_body: {
        type: Sequelize.TEXT
      },
      group_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Groups',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: queryInterface/* ,Sequelize*/ =>
    queryInterface.dropTable('Messages'),
};
