const express = require('express');
const router = express.Router();
//const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const regg = require('../model/regmodel');



router.post('/register',async (req,res)=>{
try{
    const emailiruku = await regg.findOne({where:{email:req.body.email}});
    if(emailiruku){
        return res.status(400).json("email already iruku");
    }

    const hash = await bcrypt.hash(req.body.password,10);
    const user = new regg({
        username:req.body.username,
        email:req.body.email,
        password:hash,
        // password:req.body.password
   
    });
    return res.status(201).json({ message: "User registered successfully", user });
} 

catch(error){
    console.log(error.message);
    return res.status(400).json({message: "error vandrichii !! "});
}


});

module.exports= router ;
//module.exports= data ;