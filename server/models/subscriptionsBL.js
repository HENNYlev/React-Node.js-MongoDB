const subscriptionModel = require('./subscritionModel');

const getAllSubscriptions = () => {
    return new Promise((resolve, reject) => {
        subscriptionModel.find({}, (err, subscriptions) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(subscriptions);
            }
        })
    })
}
const getSubscriptionById = (id) => {
    return new Promise((resolve, reject) => {
        subscriptionModel.find({ "_id": id }, (err, subscription) => {
            if (err) {
                reject(err)
            }
            else { resolve(subscription) }
        })
    })
}

const addSubscription = (subscription) => {
    return new Promise((resolve, reject) => {
        const newSubscription = new subscriptionModel({
            movieId: subscription.movieId,
            memberId: subscription.memberId,
            date: new Date(subscription.date)
        })
        newSubscription.save(err => {
            if (err) {
                reject(err)
            }
            else {
                console.log(subscription);
                resolve("created successfully")
            }
        })
    })
}
const deleteSubscription=(id)=>{
    return new Promise((resolve,reject)=>{
        subscriptionModel.findByIdAndDelete(id,(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("deleted")
            }
        })
    })
}

const getSubsOfMember=(id)=>{
    return new Promise((resolve,reject)=>{
        subscriptionModel.find({ "memberId":id }, (err, subscription) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            else { console.log(subscription) 
                resolve(subscription) }
        })
    })
}
module.exports = { getAllSubscriptions, getSubscriptionById ,addSubscription,deleteSubscription,getSubsOfMember}