const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const JWT_SECRET = 'Saksham123';
const { body , validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
//const fetchuser=require('../middleware/fetchuser');





router.post('/register',[
  body('username','Enter valid name').isLength({min:3}),
  
  body('password','Password length should be atleast 5').isLength({min:5}),
  

],async (req, res) => {
  const errors = validationResult(req);
  let success=false;
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }
  try {
    let a= await User.findOne({username:req.body.username});
    if(a)
    {
      return res.status(400).json({success,error:"Username already in use"});
    }
    const salt=await bcrypt.genSalt(10);
    const secPassword= await bcrypt.hash(req.body.password,salt);
    const donor = await User.create({
      username: req.body.username,
      password: secPassword
     
    });
    const data={

      donor:{
        id:donor.id
      }
    }
     success=true;
    const token=jwt.sign(data,JWT_SECRET);
    res.json({success,token});   
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error
      return res.status(400).json({ error: 'Email already exists' });
    }
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }  
});

router.post('/login',[
  
  body('username','Enter valid username').exists(),
  body('password','Password cannot be empty').exists(),

],async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {username,password}=req.body;
  let success=false;
  try {
    let user= await User.findOne({username});
    if(!user)
    {
      return res.status(400).json({error:"No User Found "});
    }
    const passwordCompare= await bcrypt.compare(password,user.password);
    
    if(!passwordCompare)
    {  
      return res.status(400).json({success,error:"No User Founds "});
    }
    const data={

      user:{
        id:user.id
      }
    }
    const token=jwt.sign(data,JWT_SECRET);
    success=true;
    res.json({success,token});
    

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});






module.exports = router;
