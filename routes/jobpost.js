const express=require('express');
const router=express.Router();
const passport = require('passport');
const jobpostController=require('../controllers/jobpost_controller.js');

router.post('/create/:id',passport.checkAuthentication,jobpostController.create);

console.log('jobpost router is working....');
module.exports=router;