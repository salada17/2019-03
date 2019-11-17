'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
        autoIncrement: false,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(45),
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      cellPhone: {
        type: Sequelize.STRING(13),
      },
      profileImage: {
        type: Sequelize.STRING(2048),
      },
      isPrivate: {
        type: Sequelize.BOOLEAN,
      },
      isFacebook: {
        type: Sequelize.BOOLEAN,
      },
      isDeveloper: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
