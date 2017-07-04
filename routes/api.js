const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const location=require('../models/location');


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
    User.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lon), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(users){
        res.send(users);
    }).catch(next);
});

//Mark current location as dangerous

router.post('/addPoint',function(req,res,next){
	
});
//Unmark current location as dangerous