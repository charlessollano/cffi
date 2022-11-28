'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([queryInterface.renameColumn('Barangays', 'regCode', 'regionCode', {
        type: Sequelize.DataTypes.STRING
      }, { transaction: t }),
        queryInterface.renameColumn('Barangays', 'provinceId', 'provinceCode', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.renameColumn('Barangays', 'psgcCode', 'barangayCode', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Barangays', 'citymunCode', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Barangays', 'provinceCode', { transaction: t }),
        queryInterface.removeColumn('Barangays', 'regionCode', { transaction: t }),
        queryInterface.removeColumn('Barangays', 'barangayCode', { transaction: t }),
        queryInterface.removeColumn('Barangays', 'citymunCode', { transaction: t })
      ]);
    });
  }
};
