const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/movieDB", () => {
    console.log("Connected to MongoDB")
})

