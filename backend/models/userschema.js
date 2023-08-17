const express=require('express');
const bcrypt=require('bcrypt');
const mongoose=require('mongoose');
const validator = require('validator')
const userschema = mongoose.Schema([
    {email :{type:String,required:true,unique:true}},
    {username :{type:String,required:true,unique:true}},
    {password :{type:String,required:true,unique:true}},
    {role :{type:String,required:true}},
     {phone:{type:String,required:true}}],
    {timestamps:true});
userschema.statics.signup = async function(email,username,password,role,phone){
    console.log({email,username,password,role,phone})
    if(!email || !username || !password || !phone){
        console.log("cameer")
        throw Error("Fill all details")
    }
    if(!validator.isEmail(email)){
        console.log("cameemail")
        throw Error("Not a Valid email")
    }
    if(!validator.isStrongPassword(password)){
        console.log("camep")
        throw Error("Not a strong password")
    }
    if(!validator.isMobilePhone(phone)){
        console.log("camep")
        throw Error("Not a strong password")
    }
    
    console.log("came")
    const emailexist=await this.findOne({email});
    const usernameexist=await this.findOne({username});
    if(emailexist){
        throw Error("Email already exist");
    }
    else if(usernameexist){
        throw Error("Username already exist");
    }
    console.log("camed")
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    console.log({email,username,password:hash,role,phone});
    try{
        const user=await this.create({email,username,password:hash,role,phone});
    }
    catch(error){
        console.log(error)
    }
    
    console.log("usercreated")
    return user;
}

userschema.statics.login = async function(email,password){
  
    if(!email || !password){
    
        throw Error("Fill all details")
    }
    const emailexist=await this.findOne({email});
    if(!emailexist){
        
        throw Error("Email does not exist");
    }
    const match= await bcrypt.compare(password,emailexist.password);
    
    if(!match){
        
        throw Error("incorrect password");
    }
    console.log("10")

    return emailexist;
}
const userdetails=mongoose.model('user',userschema);
module.exports=userdetails;