const express=require('express');
const router=express.Router();
const recruiterController=require('../controllers/recruiter_controller.js');

router.get('/sign-up',recruiterController.signUp);

router.get('/sign-in',recruiterController.signIn);

router.post('/create',recruiterController.create);
console.log('recruiter router is working....');
module.exports=router;


