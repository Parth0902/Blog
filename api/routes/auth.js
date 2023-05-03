// All the authentication ruotes will be here

const express = require("express");
const router = express.Router();

// imported register logout and login callback functions from the auth.js
const{register,logout,login}= require('../controllers/auth.js')

//post routes for http://localhost:8800/api/auth/

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)




// exported the router module
module.exports=router;

