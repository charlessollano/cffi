'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('CityMunicipalities', 'status', {
          type: Sequelize.DataTypes.STRING,
          defaultValue: 'Pending'
        }, { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('CityMunicipalities', 'status', { transaction: t })
      ]);
    });
  }
};
