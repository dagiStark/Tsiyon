const express = require("express");
const router = express.Router();
const authRouter = require("./auth/authRoutes.js");
const productRouter = require("./admin/productRoutes.js");

router.use("/auth", authRouter);
router.use("/admin/products", productRouter);

module.exports = router;
