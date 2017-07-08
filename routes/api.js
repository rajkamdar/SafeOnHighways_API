const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const location=require('../models/location');
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});

//Get all locations

router.get('/getall',function(req,res){
  location.find({},function(err,data){
    if(err) console.log(err);
    else {
      res.send(data);
    }
  });
});


//Get nearby locations

router.get('/getNearbyPoints', function(req, res, next){
    location.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lon), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(users){
        res.send(users);
    }).catch(next);
});

//Mark current location as dangerous

router.post('/addPoint', urlencodedParser, function(req,res){
	var newLocation=location(req.body).save(function(err,newLocation){
    if(err) console.log(err);
    if(newLocation!=null)
      res.send({status:'1'});
    else
      res.send({status:'0'});
  });
});
//Unmark current location as dangerous

module.exports=router;