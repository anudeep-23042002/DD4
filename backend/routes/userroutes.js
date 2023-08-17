const express = require('express');

const {login,logout,Signup}=require('../controllers/usercontrollers');

const router=express.Router();

router.post('/signup',Signup)

router.post('/login',login);

module.exports = router;