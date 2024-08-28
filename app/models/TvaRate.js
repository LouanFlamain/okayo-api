const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Tva_rates = sequelize.define("Tva_rates", {
  tva_rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: false,
  },
  date_start: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false,
  },
  date_end: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false,
  },
  default: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    unique: false,
    defaultValue: true,
  },
});

module.exports = Tva_rates;
