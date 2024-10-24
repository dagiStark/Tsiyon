const express = require("express");
const router = express.Router();
const authRouter = require("./auth/authRoutes.js");
const adminProductRouter = require("./admin/productRoutes.js");
const shopProductRouter = require("./shop/productRoutes.js");

router.use("/auth", authRouter);
router.use("/admin/products", adminProductRouter);
router.use("/shop/products", shopProductRouter);


module.exports = router;
