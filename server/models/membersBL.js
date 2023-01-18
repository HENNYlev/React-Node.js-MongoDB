const membersModel=require('./membersModel');

const getAllMembers=()=>{
    return new Promise((resolve,reject)=>{
        membersModel.find({},(err,members)=>{
            if(err){
                console.log(err);
                reject(err);
            }
            else{
                resolve(members);
            }
        })
    })
}
const getMemberById=(id)=>{
    return new Promise((resolve,reject)=>{
        try{
            const member=membersModel.findOne({"_id":id})
            console.log(member);
            resolve(member)
            return member;
        }catch(err){
            reject(err);
        }
    })
}
const addMember=(member)=>{
    return new Promise((resolve,reject)=>{
        const newMember=new membersModel({
            name:member.name,
            email:member.email,
            city:member.city
        })
        newMember.save(err=>{
            if(err){
                reject(err)
            }
            else{
                console.log(member);
                resolve("created successfully")
            }
        })
    })
}
const deleteMember=(id)=>{
    return new Promise((resolve,reject)=>{
        membersModel.findByIdAndDelete(id,(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("deleted")
            }
        })
    })
}
const updateMember = (id, member) => {
    return new Promise((resolve, reject) => {
        membersModel.findByIdAndUpdate(id, member, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve("Updated")
            }
        })
    })
}
module.exports={getAllMembers,addMember,deleteMember,getMemberById,updateMember}