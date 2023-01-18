const usersModel = require('./usersModel');

const getPersonByPassword = async (user) => {
    try {
        let data = await usersModel.find({ "userName": user.userName })
        const password=user.password;
        console.log("password",password);
        console.log(data)
        if(data.length>0){
        if(data[0].password==password){
        return data}else{
        return [];}}
    } catch (err) {
        console.log(err)
        return err
    }
}
const getAllUsers=()=>{
    return new Promise((resolve,reject)=>{
        usersModel.find({},(err,users)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(users);
            }
        })  
    })
}
const createuser = async (user) => {
 return new Promise((resolve,reject)=>{
    const newUser=new usersModel({
        fullName:user.fullName,
        userName:user.userName,
        password:user.password
    })
    newUser.save((err)=>{
        if(err){
            reject(err)
        }
        else{
            resolve("create user")
        }
    })
 })
}
const deletePerson=(id)=>{
    return new Promise((resolve, reject) => {
        usersModel.findByIdAndDelete(id, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Deleted")
            }
        })
    })
}
module.exports={getPersonByPassword,createuser,getAllUsers,deletePerson}