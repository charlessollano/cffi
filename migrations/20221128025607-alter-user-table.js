'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'position', { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    
  }
};
