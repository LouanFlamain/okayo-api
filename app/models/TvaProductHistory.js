const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Tva_product_history = sequelize.define("Tva_product_history", {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  tva_rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: false,
  },
});

module.exports = Tva_product_history;
