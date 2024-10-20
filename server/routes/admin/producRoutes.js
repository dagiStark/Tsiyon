const express = require("express");
const router = express.Router();
const {
  handleImageUpload,
} = require("../../controllers/admin/productsController");
const upload = require("../../helpers/cloudinary").upload;



router.post("/upload-image", upload("my_file"), handleImageUpload);


module.exports = router;
