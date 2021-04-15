  
const Job=require('../models/job');
  
const Candidate=require('../models/candidate');
module.exports.create=function(req,res){
    Job.create({
        position:req.body.jobposition,
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
module.exports.description=function(req,res){
    let jobid=req.params.id;
    Job.findById(jobid)
    .populate('recruiter')
    .exec(function(err,job){
        if(err){
            console.log('error in loading the job');
            return;
        }
        if(job){
            return res.render('job_description',{
                job:job
            });
        }
        else{
            console.log('error in loading the job');
            return;
        }
    })


}
//apply job
module.exports.jobApply=function(req,res){
    let jobid=req.query.id;
    console.log('jobid',jobid);
    Job.findById(jobid,function(err,job){
        if(err){
            console.log('err in finding job while applying',err);
            return;
        }
        if(job){
            let candidateId=req.query.id1;
            console.log('candidate id::',candidateId);
            Candidate.findById(candidateId,function(err,jobcandidate){
                if(err){
                    console.log('err in finding candidate  while applying',err);
                    return;
                }
                job.candidate.push(jobcandidate);
                job.save();
                return res.redirect('back');
            });
            
        }
        else{
            console.log('err in  finding job while applying ,no job here');
            return;
        }
    });




}
