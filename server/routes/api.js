const express = require("express");
const router = express.Router();
const authRouter = require("./auth/authRoutes.js");

router.use("/auth", authRouter);

module.exports = router;
