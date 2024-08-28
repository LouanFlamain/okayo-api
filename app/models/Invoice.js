const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Invoice = sequelize.define("Invoice", {
  invoice_ref: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  biling_date: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false,
  },
  echeance_date: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false,
  },
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
  reglement_condition: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  total_ht: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: false,
  },
  total_ttc: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: false,
  },
});

module.exports = Invoice;
