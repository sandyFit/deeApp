const express = require("express")
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');


router.route('/user/register').post(registerUser)
router.route('/login').get(loginUser)

module.exports= router