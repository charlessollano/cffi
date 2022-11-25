'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init({
    companyName: DataTypes.STRING,
    companyAddress: DataTypes.STRING,
    description: DataTypes.STRING,
    companyEmail: DataTypes.STRING,
    companyContactNum: DataTypes.STRING,
    dateEstablished: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};