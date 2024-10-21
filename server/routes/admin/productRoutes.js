const express = require("express");
const router = express.Router();
const {
  handleImageUpload,
  addProduct,
  editProduct,
  fetchProducts,
  deleteProduct,
} = require("../../controllers/admin/productsController");
const upload = require("../../helpers/cloudinary").upload;

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add", addProduct);
router.post("/edit/:id", editProduct);
router.get("/get", fetchProducts);
router.post("/delete/:id", deleteProduct);


module.exports = router;
