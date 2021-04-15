const passport=require('passport');
//imported passport-local module and especially Strategy property..
const LocalStrategy=require('passport-local').Strategy;
//imported candidate
const Candidate=require('../models/candidate');

//authentication using passport.js
passport.use(new LocalStrategy({
    //usernameField is inbuilt..
     usernameField:'email'
    },
    function(email,password,done){
        //find the candidate and establish the identity
        Candidate.findOne({email:email},function(err,candidate){
            if(err){
                console.log('error in finding candidate ---> passport');
                return done(err);
            }
            if(!candidate || candidate.password!=password){
                console.log('invalid Username/Password');
                return done(null,false);
            }
            console.log(candidate);
            // req.candidate=candidate;  //comment this //todo
            return done(null,candidate);
        });

    }
));
//serialising the user and decide which key is to be kept in the cookies
passport.serializeUser(function(candidate,done){
    done(null,candidate.id);
});
//deserialing the user  from the key in cookies
passport.deserializeUser(function(id,done){
    Candidate.findById(id,function(err,candidate){
        if(err){
            console.log('error in finding user --> passport ');
            return done(err);

        }
        console.log("deserialise",candidate);
        return done(null,candidate);
    });

});
passport.checkAuthenticationCandidate=function(req,res,next){
    //if candidate is signed in then pass the request on next(controller action)
    if(req.isAuthenticated()){
        return next();
    }
    //if candidate is not signed in
    return res.redirect('/candidate/sign-in');
}
passport.setAuthenticatedCandidate=function(req,res,next){
    if(req.isAuthenticated()){

        /* req.candidate contains the current signed in candidate 
        from the session cookie and we are just sending 
        this to the locals for the views*/
        //imp :: in req officially keyword is 'user' for online person.
       res.locals.candidate=req.user;
    //    console.log(req);
       console.log('hello candidate::::::',req.user);


    }
    //to run the next process
    next();
}
module.exports=passport;