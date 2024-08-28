const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Invoice_details = sequelize.define("Invoice_details", {
  id_invoice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  id_product: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  unit_price_ht: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: false,
  },
  tva_rate: {
    type: DataTypes.FLOAT,
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
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});

module.exports = Invoice_details;
