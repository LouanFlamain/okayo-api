const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("okayo_db", "root", "root", {
  host: "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection à la db réussis");
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la db:", err);
  });

module.exports = { sequelize };
