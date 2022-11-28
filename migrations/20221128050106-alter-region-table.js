'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([queryInterface.renameColumn('Regions', 'regCode', 'regionCode', {
        type: Sequelize.DataTypes.STRING
      }, { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Regions', 'regionCode', { transaction: t })
      ]);
    });
  }
};
