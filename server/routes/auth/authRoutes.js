const express = require("express")
const { registerUser } = require("../../controllers/auth/authControllers")

const router = express.Router()


router.post("register", registerUser)



module.express = router