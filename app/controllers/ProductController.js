const Product = require("../models/Product");
const TvaProductHistory = require("../models/TvaProductHistory");
const TvaRate = require("../models/TvaRate");

exports.createProduct = async (req, res) => {
  let product_id;
  let already_exist = false;
  let default_tva_rate = null;

  try {
    const tva_rate = await TvaRate.findOne({
      where: {
        default: true,
      },
    });
    default_tva_rate = tva_rate.tva_rate;
  } catch (error) {
    return res.status(400).json(error);
  }

  console.log(default_tva_rate);

  req.body.tva_rate = req.body.tva_rate ?? default_tva_rate;

  try {
    product = await Product.create(req.body);
    product_id = product.id;
  } catch (err) {
    return res.status(400).json({
      message: err,
    });
  }

  try {
    tva_product_history = await TvaProductHistory.findAll({
      where: {
        product_id: product_id,
        tva_rate: req.body.tva_rate,
      },
    });

    if (tva_product_history > 0) {
      already_exist = true;
    }
  } catch (error) {
    return res.status(500).json(error);
  }

  if (!already_exist) {
    try {
      const now = new Date();
      tva_product_history = await TvaProductHistory.create({
        product_id: product_id,
        date: now,
        tva_rate: req.body.tva_rate,
      });
      res.status(201).json({
        message: "Produit crée avec succès",
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
};

exports.updateProductById = async (req, res) => {
  const id = req.params.id;
  let old_rate;

  try {
    const product = await Product.findByPk(id);
    old_rate = product.tva_rate;
  } catch (error) {
    return res.status(500).json(error);
  }

  if (
    req.body.tva_rate !== undefined &&
    req.body.tva_rate !== null &&
    req.body.tva_rate !== old_rate
  ) {
    console.log("test");
    try {
      const now = new Date();
      await TvaProductHistory.create({
        product_id: id,
        date: now,
        tva_rate: req.body.tva_rate,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  try {
    await Product.update(req.body, {
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: "produit mis à jour avec succès",
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};

exports.getProductById = async (req, res) => {
  id = req.params.id;
  try {
    const product = await Product.findByPk(id);
    res.json(product);
  } catch (error) {
    res.status(400).json({
      error,
    });
  }
};
