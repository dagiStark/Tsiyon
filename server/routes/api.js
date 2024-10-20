const express = require("express");
const router = express.Router();
const authRouter = require("./auth/authRoutes.js");
const productRouter = require("./admin/producRoutes.js");

router.use("/auth", authRouter);
router.use("/admin", productRouter)

module.exports = router;
