const express = require("express");
const router = express.Router();

//controllers
const productsControllers = require("../controllers/ProductController");
const customersControllers = require("../controllers/CustomersController");
const tvaProductHistoryControllers = require("../controllers/TvaProductHistory");
const invoiceControllers = require("../controllers/InvoiceController");
const tvaRatesControllers = require("../controllers/TvaRatesController");

//products
router.post("/product", productsControllers.createProduct);
router.get("/product", productsControllers.getAllProducts);
router.get("/product/:id", productsControllers.getProductById);
router.put("/product/:id", productsControllers.updateProductById);
router.get(
  "/product/:id/historical",
  tvaProductHistoryControllers.getAllTvaProductsHistoryById
);
//customers

router.post("/customer", customersControllers.createCustomer);
router.get("/customer", customersControllers.getAllCustomers);
router.get("/customer/:id", customersControllers.getCustomersById);
router.delete("/customer/:id", customersControllers.deleteCustomerById);
router.put("/customer/:id", customersControllers.updateCustomerById);

//Invoice
router.post("/invoice", invoiceControllers.createInvoice);
router.get("/invoice", invoiceControllers.getAllInvoice);
router.get("/invoice/:id", invoiceControllers.getInvoiceById);

//TvaRates
router.get("/tva", tvaRatesControllers.getAllTvaRates);
router.get("/tva/:id", tvaRatesControllers.getTvaRatesById);
router.post("/tva", tvaRatesControllers.createTvaRates);
router.delete("/tva/:id", tvaRatesControllers.deleteTvaRatesById);
router.put("/tva/:id", tvaRatesControllers.updateTvaRatesById);

module.exports = router;
