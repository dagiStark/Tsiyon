const Product = require("../../models/Product");

const imageUploadUtil = require("../../helpers/cloudinary").imageUploadUtil;

const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);
    console.log("RESULT: ", result);

    res.json({
      success: true,
      message: "Image uploaded successfully!",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// add a new product

const addProduct = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
    } = req.body;

    const newProduct = new Product({
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
    });

    await newProduct.save();3

    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// fetch all products

const fetchProducts = async (req, res) => {
  try {
    const listOfProducts = await Product.find({});
    res.status(200).json({
      success: true,
      data: listOfProducts,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// edit a product

const editProduct = async (req, res) => {
  try {
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// delete a product

const deleteProduct = async (req, res) => {
  try {
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  handleImageUpload,
  addProduct,
  fetchProducts,
  editProduct,
  deleteProduct,
};
