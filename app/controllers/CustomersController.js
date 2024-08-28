const { where } = require("sequelize");
const Customer = require("../models/Customers");

exports.createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getCustomersById = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.findByPk(id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateCustomerById = async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customer.update(req.body, {
      where: {
        id: id,
      },
    });
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteCustomerById = async (req, res) => {
  const id = req.params.id;

  try {
    const customer = await Customer.destroy(req.body, {
      where: {
        id: id,
      },
    });
    return res.status(200).json(customer);
  } catch (error) {
    return res.status(400).json(error);
  }
};
