const express=require("express");

const cors =require('cors')
const userRouter=require('./routers/userRoutr');
const moviesRouter=require('./routers/movieRouter');
const membersRouter=require('./routers/memberRouter')
const subscriptionRouter=require('./routers/subscriptionRouter');
const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/users",userRouter);
app.use("/api/movies",moviesRouter);
app.use("/api/members",membersRouter);
app.use("/api/subscription",subscriptionRouter)

require('./configs/dataBase');

app.listen(8005,()=>{
    console.log("hello 8005")
});







app.use(express.urlencoded({ extended: false }));



