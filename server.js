const express =require("express");

const app=express();
const cors=require("cors")
const bodyParser=require("body-parser")
const port=5000
const db=require("./db.js")

const Pizza=require('./models/pizzaModel.js')

const pizzaRoute=require('./routes/pizzaRoute')

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.use('/api/pizzas', pizzaRoute)

app.get("/", (req, res)=>{
    res.send("Server Working" + " " + "on port" + " " + port);
});




app.listen(port, () =>console.log("Port is running"));
