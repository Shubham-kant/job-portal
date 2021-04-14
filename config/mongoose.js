const mongoose=require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/job_portal_development');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting to Mongodb'));

db.once('open',function(){
    console.log('Connected to Database:: Mongodb');
});
module.exports=db;