const mongoose=require('mongoose');

const jobSchema=new mongoose.Schema({
    position:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        required:true

    },
    //array of candidates
    candidate:[{
        type:mongoose.Schema.Types.ObjectId,
        //name of model to be linked
        ref:'Candidate'
    }],
    recruiter:{
        type:mongoose.Schema.Types.ObjectId,
        //name of model to be linked
        ref:'Recruiter'
    }
},{
    //to add a feature of 'created at' and 'updated at'.
    timestamps:true
});





const Job=mongoose.model('Job',jobSchema);
module.exports=Job;