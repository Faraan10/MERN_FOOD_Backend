const mongoose=require("mongoose");

var mongoURL="mongodb+srv://faraan:faraan@cluster0.akvpjxh.mongodb.net/mern-pizza";

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db=mongoose.connection

db.on("connected", ()=>{
    console.log("Mongo DB Connected")
})

db.on("error", ()=>{
    console.log("Mongo DB Connection failed")
})

module.exports=mongoose