'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAuth extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserAuth.init({
    userId: DataTypes.INTEGER,
    role: DataTypes.INTEGER,
    status: DataTypes.STRING,
    username: DataTypes.STRING,
    auth: DataTypes.STRING,
    userpincode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserAuth',
  });
  return UserAuth;
};