const { json } = require('express');
const posts = require('../models/postschema');
const mongoose = require('mongoose');
const userdetails=require('../models/userschema');

const homepage = async(req,res)=>{
    const userid=req.user._id;
    const food_posts= await posts.find().sort({createdAt: -1});
    
    return res.json(food_posts);
};
const fetchdonations=async(req,res)=>{
    const food_posts= await posts.find({user_id:req.user._id}).sort({createdAt: -1});
    return res.json(food_posts);
}
const fetchpickups=async(req,res)=>{
    const food_pickups= await posts.find({donor_id:req.user._id,status:"assigned"}).sort({createdAt: -1});
    return res.json(food_pickups);
}

const createfoodpost =async(req,res)=>{
    const userid=req.user._id;
    const {food,location,status} = req.body;
    console.log({food,location,status,userid})
    try{
        const users= await userdetails.find({_id:userid})
        console.log(users);
        console.log(userdetails)
        const phone=users[0].phone;
        const f = await posts.create({food,location,status,user_id:userid,donor_id:"null",pickuptime:"2400",donor_phone:phone});
        console.log("saved");
        res.status(200).json(f);
        }
    catch(err){
        console.log(err);
        res.status(400).json({error : err.message});
    }
    return res.json();
}
const volunteer = async(req,res)=>{
    return res.json();
}
const deletepost=async(req,res)=>{
    
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        
        return res.status(400).json({error: 'No such post'})
    }
    
    const post = await posts.findOneAndDelete({_id: id})

    if(!post) {
        return res.status(400).json({error: 'No such post'})
    }
    return res.status(200).json(post)   
}
const setpickup=async(req,res)=>{
    const {id}=req.params;
    const pickuptimed=req.body.time;
    console.log(pickuptimed)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("no such post")
        return res.status(400).json({error: 'No such post'})
    }
    try {
        const updatedpost = await posts.findByIdAndUpdate(id,{pickuptime:pickuptimed,status:"assigned",donor_id:req.user._id}, { new: true });
        return res.status(200).json(updatedpost);
      } catch (error) {
        console.log("heyy")
        console.log(error)
        return res.status(400).send(error);
      }
}
const setdonated=async(req,res)=>{
    const {id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("no such post")
        return res.status(400).json({error: 'No such post'})
    }
    try {
        const updatedpost = await posts.findByIdAndUpdate(id,{status:"donated"}, { new: true });
        return res.status(200).json(updatedpost);
      } catch (error) {
        console.log(error)
        return res.status(400).send(error);
      }
}
module.exports= {homepage,fetchdonations,createfoodpost,volunteer,deletepost,setpickup,fetchpickups,setdonated};