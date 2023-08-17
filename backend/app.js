require('dotenv').config();
const express = require('express');
const routes=require('./routes/routes');
const userroutes=require('./routes/userroutes')
const mongoose=require('mongoose');
const multer=require('multer')
const app=express();
const dburl="mongodb+srv://anudeep:1234@blogger.a0ojxar.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dburl).then(()=>{
    console.log('connected to database');
}).catch((err)=>{
    console.log(err);
})
app.use(express.json());

app.use('/api/posts',routes)
app.use('/api/user',userroutes)
app.listen(4000);