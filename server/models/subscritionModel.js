const mongoose=require('mongoose');
let subscriptionSchema=new mongoose.Schema({
    movieId:String,
    memberId:String,
    date:Date
})
module.exports=mongoose.model("subscription",subscriptionSchema);
