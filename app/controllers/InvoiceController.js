const Invoice = require("../models/Invoice");
const InvoiceDetails = require("../models/InvoiceDetails");
const Product = require("../models/Product");
const Customer = require("../models/Customers");

exports.getAllInvoice = async (req, res) => {
  try {
    const invoices = await Invoice.findAll();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({
      message: err,
    });
  }
};

exports.createInvoice = async (req, res) => {
  const products = req.body.products;
  let ht_price = 0;
  let ttc_price = 0;
  let invoice_details_array = [];
  let client_info;

  try {
    client_info = await Customer.findByPk(req.body.client_id);
  } catch (error) {
    res.status(400).json(error);
  }

  for (const element of products) {
    const product_data = await Product.findByPk(element.product_id);

    const quantity = element.quantity;
    const product_price_ht = product_data.price;
    const product_tva = product_data.tva_rate;
    const product_price_ttc = product_price_ht * (1 + product_tva);

    ht_price += quantity * product_price_ht;
    ttc_price += quantity * product_price_ttc;

    invoice_details_array = [
      ...invoice_details_array,
      {
        quantity: quantity,
        product_price_ht: product_price_ht,
        product_tva: product_tva,
        product_price_ttc: product_price_ttc,
        name: product_data.name,
        id: product_data.id,
      },
    ];
  }

  let invoice_id = null;
  try {
    const invoice_data = {
      ...req.body,
      ...client_info.dataValues,
      total_ht: ht_price,
      total_ttc: ttc_price,
    };
    const invoice = await Invoice.create(invoice_data);
    invoice_id = invoice.id;
  } catch (error) {
    return res.status(400).json(error);
  }

  if (
    invoice_id !== null &&
    invoice_id !== undefined &&
    invoice_details_array.length > 0
  ) {
    invoice_details_array.forEach(async (element) => {
      try {
        const total_ht = element.product_price_ht * element.quantity;
        const total_ttc =
          element.product_price_ht *
          (1 + element.product_tva) *
          element.quantity;
        const invoice_details_data_object = {
          id_invoice: invoice_id,
          id_product: element.id,
          name: element.name,
          quantity: element.quantity,
          unit_price_ht: element.product_price_ht,
          tva_rate: element.product_tva,
          total_ht: total_ht,
          total_ttc: total_ttc,
        };
        await InvoiceDetails.create(invoice_details_data_object);
      } catch (error) {
        return res.status(400).json(error);
      }
    });

    res.status(200).json({
      message: "Facture généré",
    });
  }
};

exports.getInvoiceById = async (req, res) => {
  id = req.params.id;
  let invoice_data = null;
  let invoice_data_details = null;
  try {
    invoice_data = await Invoice.findByPk(id);
  } catch (error) {
    return res.status(400).json(error);
  }

  try {
    invoice_data_details = await InvoiceDetails.findAll({
      where: {
        id_invoice: id,
      },
    });
  } catch (error) {
    return res.status(400).json(error);
  }

  if (invoice_data !== null && invoice_data_details !== null) {
    res.status(200).json({
      data: {
        invoice: invoice_data,
        details: invoice_data_details,
      },
    });
  } else {
    res.status(500).json({
      message: "error",
    });
  }
};
