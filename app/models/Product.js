const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Product = sequelize.define("Product", {
  product_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: false,
  },
  tva_rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: false,
  },
});

module.exports = Product;
