  
const Job=require('../models/job');

module.exports.create=function(req,res){
    Job.create({
        content:req.body.content,
        isActive:true,
        recruiter:req.params.id
    },function(err){
        if(err){
            console.log('err in creating a job');
            return;
        }

        return res.redirect('back');
    });

}