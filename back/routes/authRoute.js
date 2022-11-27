const express = require("express")
const router = express.Router();
const { registerUser, loginUser, logOut} = require('../controllers/authController');
const { isAuthenticatedUser } = require("../middleware/authMiddle");

router.route('/user/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(isAuthenticatedUser, logOut)
//router.route("/forgotPassword").post(forgotPassword)

module.exports= router