const express = require("express");
const router = express.Router();
const {
  getFilteredProducts,
} = require("../../controllers/shop/productsController");

router.get("/get", getFilteredProducts);

module.exports = router;
