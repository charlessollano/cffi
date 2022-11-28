'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.renameColumn('Barangays', 'municipalityId','city_municipalityId', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.removeColumn('Barangays', 'cityId', { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Barangays', 'city_municipalityId', { transaction: t })
      ]);
    });
  }
};
