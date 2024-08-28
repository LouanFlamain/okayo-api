const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Customers = sequelize.define("Customers", {
  client_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  zip_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});

module.exports = Customers;
