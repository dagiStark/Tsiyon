const imageUploadUtil = require("../../helpers/cloudinary").imageUploadUtil;


const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = imageUploadUtil(url);

    res.json({
      success: true,
      message: "Image uploaded successfully!",
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};




module.exports = { handleImageUpload };