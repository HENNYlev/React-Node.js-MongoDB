const mongoose=require('mongoose');
let moviesSchema=new mongoose.Schema({
    name:String,
    premiered:String,
    genres:[String],
    image:String
})
module.exports=mongoose.model("movie",moviesSchema);
