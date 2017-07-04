const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

app.use(bodyParser.json());
app.use('/api',require('./routes/api'));

app.use(function(err,req,res,next){
  console.log(err);
   res.status(422).send({error: err.message});
});

mongoose.connect("mongodb://sohroot:sohpassword@ds147902.mlab.com:47902/soh");
//mongodb://<dbuser>:<dbpassword>@ds147902.mlab.com:47902/soh
mongoose.Promise = global.Promise;

app.listen(process.env.port||4000,function(){
  console.log("server started");
});