'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MemberDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      fb: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.INTEGER
      },
      province: {
        type: Sequelize.INTEGER
      },
      municipality: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.INTEGER
      },
      barangay: {
        type: Sequelize.INTEGER
      },
      rank: {
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.INTEGER
      },
      occupation: {
        type: Sequelize.INTEGER
      },
      beneficiary: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MemberDetails');
  }
};