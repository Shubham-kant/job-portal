const Recruiter=require('../models/recruiter');

module.exports.signUp=function(req,res){
    return res.render('recruiter_signup');
}
module.exports.signIn=function(req,res){
    return res.render('recruiter_signin');
}
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    Recruiter.findOne({email:req.body.email},function(err,recruiter){
        if(err){
            console.log('error in finding recruiter in signing up');
            return;
        }
        if(!recruiter){
            Recruiter.create(req.body,function(err,recruiter){
                if(err){
                    console.log('error in creating recruiter while sign-up...!!!!!!!!');
                    return;
                }
                return res.redirect('/recruiter/sign-in');
            });
        }
        else{
            return res.redirect('back');
        }
    })
}