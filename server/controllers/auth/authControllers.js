const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const registerUser = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ msg: "Passwords don't match" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User created successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server Error" });
  }
};

const loginUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server Error" });
  }
};

module.exports = { registerUser, loginUser };
