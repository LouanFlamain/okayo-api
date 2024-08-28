const express = require("express");
const { sequelize } = require("./models");
require("dotenv").config();
const router = require("./routes/routes");

const app = express();
app.use(express.json());

app.use("/api", router);

const Customers = require("./models/Customers");
const Invoice = require("./models/Invoice");
const InvoiceDetails = require("./models/InvoiceDetails");
const Product = require("./models/Product");
const TvaProductHistory = require("./models/TvaProductHistory");
const TvaRate = require("./models/TvaRate");

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database connected and models synchronized.");
  })
  .catch((err) => console.error("Error connecting to the database:", err));

module.exports = app;
