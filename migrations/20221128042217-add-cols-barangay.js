'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Barangays', 'regCode', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Barangays', 'psgcCode', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Barangays', 'provinceId', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Barangays', 'regCode', { transaction: t }),
        queryInterface.removeColumn('Barangays', 'psgcCode', { transaction: t }),
        queryInterface.removeColumn('Barangays', 'provinceId', { transaction: t })
      ]);
    });
  }
};
