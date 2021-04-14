const Candidate=require('../models/candidate');



module.exports.signUp=function(req,res){
    return res.render('candidate_signup');
}
module.exports.signIn=function(req,res){
    return res.render('candidate_signin');
}
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    Candidate.findOne({email:req.body.email},function(err,candidate){
        if(err){
            console.log('error in finding candidate in signing up');
            return;
        }
        if(!candidate){
            Candidate.create(req.body,function(err,candidate){
                if(err){
                    console.log('error in creating candidate while sign-up...!!!!!!!!');
                    return;
                }
                return res.redirect('/candidate/sign-in');
            });
        }
        else{
            return res.redirect('back');
        }
    })
}