const express = require("express")
const router = express.Router()
const productController = require("../../controllers/admin/productsController")
const { handleImageUpload } = require("../../controllers/admin/productsController")




router.post("/handle-image-upload", handleImageUpload)

module.exports = router 
