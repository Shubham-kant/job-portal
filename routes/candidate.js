const express=require('express');
const router=express.Router();
const candidateController=require('../controllers/candidate_controller.js');

router.get('/sign-up',candidateController.signUp);

router.get('/sign-in',candidateController.signIn);
router.post('/create',candidateController.create);

console.log('candidate router is working....');
module.exports=router;