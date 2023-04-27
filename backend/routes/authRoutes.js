const express = require("express");
const { signin, signup, logout, userProfile } = require("../controllers/authController");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();




//auth routes
//signup 
router.post('/signup' , signup)
//signin
router.post('/signin' , signin)
//logout
router.get('/logout' , logout)
//logout
router.get('/me' ,isAuthenticated, userProfile)


module.exports = router