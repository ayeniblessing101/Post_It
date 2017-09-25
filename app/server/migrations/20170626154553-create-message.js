
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
      priority_level: {
        type: Sequelize.STRING
      },
      group_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Groups',
          key: 'id',
          as: 'group_id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
          as: 'user_id'
        }
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
  down: queryInterface /* ,Sequelize */ =>
    queryInterface.dropTable('Messages'),
};
