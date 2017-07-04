var mongoose=require('mongoose');
const geoSchema=new mongoose.Schema({
  type:{
    type:String,
    default:"Point"
  },
  coordinates:{
    type:[Number],
    index:"2dsphere"
  }
});

module.exports=mongoose.model('location',new mongoose.Schema({
  count:Number
  geometry:geoSchema
}));