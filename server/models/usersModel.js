const mongoose=require('mongoose');
let usersSchema=new mongoose.Schema({
    fullName:String,
    userName:String,
    password:String
})
module.exports=mongoose.model("user",usersSchema);
