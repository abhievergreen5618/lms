const express = require("express");
const router = express.Router();

// Controllers
const LoginController = require("../../controllers/common/LoginController");


// Validators
// const RegisterValidator = require("../../validators/api/RegisterValidator");
// const LoginValidator = require("../../validators/api/LoginValidator");

// Registers a new User
// router.post("/register",RegisterValidator.registerUser,Auth.registerUser);

// router.get("/login",LoginValidator.loginUser,LoginController.loginUser);
router.get("/login",LoginController.loginUser);

module.exports = router;