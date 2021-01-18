import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _User from  "./user.js";

export default function initModels(sequelize) {
  var User = _User.init(sequelize, DataTypes);


  return {
    User,
  };
}
