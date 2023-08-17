const express=require('express');
const mongoose=require('mongoose');

const postschema = mongoose.Schema([
    {food :{type:String,required:true}},
    {location :{type:String,required:true}},
    {status :{type:String,required:true}},
    {user_id:{type:String,required:true}},
    {donor_id:{type:String,required:true}},
    {donor_phone:{type:String,required:true}},
    {pickuptime:{type:String,required:true}}],
    {timestamps:true});

const posts=mongoose.model('post',postschema);
module.exports=posts;