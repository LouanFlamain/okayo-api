const { where } = require("sequelize");
const TvaRates = require("../models/TvaRate");

exports.createTvaRates = async (req, res) => {
  let tva_default = [];
  try {
    tva_default = await TvaRates.findAll({
      where: {
        default: true,
      },
    });
  } catch (error) {
    return res.status(400).json(error);
  }

  if (tva_default.length > 0) {
    try {
      tva_default.forEach(async (element) => {
        await TvaRates.update(
          {
            default: false,
          },
          {
            where: {
              id: element.id,
            },
          }
        );
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  try {
    const tva_rates = await TvaRates.create(req.body);
    return res.status(200).json(tva_rates);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateTvaRatesById = async (req, res) => {
  const id = req.params.id;

  try {
    await TvaRates.update(req.body, {
      where: {
        id: id,
      },
    });
    return res.status(200).json({ message: "taux modifié" });
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.getAllTvaRates = async (req, res) => {
  try {
    const tva_rates = await TvaRates.findAll();
    return res.status(200).json(tva_rates);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.getTvaRatesById = async (req, res) => {
  const id = req.params.id;
  try {
    const tva_rates = await TvaRates.findByPk(id);
    return res.status(200).json(tva_rates);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteTvaRatesById = async (req, res) => {
  const id = req.params.id;
  try {
    await TvaRates.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({ message: "taux supprimé" });
  } catch (error) {
    return res.status(400).json(error);
  }
};
