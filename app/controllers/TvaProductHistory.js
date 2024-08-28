const TvaProductHistory = require("../models/TvaProductHistory");

exports.getAllTvaProductsHistoryById = async (req, res) => {
  id = req.params.id;

  try {
    const TvaProd = await TvaProductHistory.findAll({
      where: {
        product_id: id,
      },
    });
    res.status(200).json(TvaProd);
  } catch (error) {
    res.status(400).json(error);
  }
};
