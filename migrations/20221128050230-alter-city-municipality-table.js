'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([queryInterface.renameColumn('CityMunicipalities', 'regCode', 'regionCode', {
        type: Sequelize.DataTypes.STRING
      }, { transaction: t }),
        queryInterface.renameColumn('CityMunicipalities', 'provinceId', 'provinceCode', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('CityMunicipalities', 'citymunCode', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t })
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('CityMunicipalities', 'provinceCode', { transaction: t }),
        queryInterface.removeColumn('CityMunicipalities', 'regionCode', { transaction: t }),
        queryInterface.removeColumn('CityMunicipalities', 'citymunCode', { transaction: t })
      ]);
    });
  }
};
