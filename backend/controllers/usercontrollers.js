const { json } = require('express');
const mongoose = require('mongoose')
const userdetails=require('../models/userschema');
const jwt =require('jsonwebtoken');

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'7d'});
}
const login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await userdetails.login(email,password);
        const token=createToken(user._id);
        const users= await userdetails.find({ email: email })
        const role=users[0].role;
        const username=users[0].username;
        const phone=users[0].phone;
        
        res.status(200).json({email,token,role,username,phone})

    } catch(error){
        res.status(500).json({error:error.message});
    }
    return res.json();
}
const logout=(req,res)=>{
    return res.json();
}
// const {email, password} = req.body

// try {
//   const user = await User.signup(email, password)

//   // create a token
//   const token = createToken(user._id)

//   res.status(200).json({email, token})
// } catch (error) {
//   res.status(400).json({error: error.message})
// }
const Signup= async(req,res)=>{
    const {email,password,username,role,phone}=req.body
    console.log({email,password,username,role,phone})
    try{
        const user=await userdetails.signup(email,username,password,role,phone);
        const token=createToken(user._id);
        console.log('token')
        console.log(token);
        res.status(200).json({email,token,role,phone,username});

    } catch(error){
        res.status(400).json({error:error});
    }
    return res.json();
}

module.exports= {login,Signup,logout};
