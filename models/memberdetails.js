'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MemberDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MemberDetails.init({
    userId: DataTypes.INTEGER,
    fb: DataTypes.STRING,
    region: DataTypes.STRING,
    province: DataTypes.STRING,
    municipality: DataTypes.STRING,
    city: DataTypes.STRING,
    barangay: DataTypes.STRING,
    rank: DataTypes.STRING,
    position: DataTypes.STRING,
    occupation: DataTypes.STRING,
    beneficiary: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MemberDetails',
  });
  return MemberDetails;
};