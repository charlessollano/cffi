'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([queryInterface.renameColumn('Provinces', 'regCode', 'regionCode', {
        type: Sequelize.DataTypes.STRING
      }, { transaction: t }),
        queryInterface.addColumn('Provinces', 'provinceCode', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Provinces', 'provinceCode', { transaction: t }),
        queryInterface.removeColumn('Provinces', 'regionCode', { transaction: t })
      ]);
    });
  }
};
