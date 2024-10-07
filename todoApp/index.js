const express=require("express");
const app=express();

//load config from env file
require("dotenv").config();
const PORT =process.env.PORT || 4000;

// midleware to parse request body
app.use(express.json());

//import routes for todo api
const todoRoutes= require("./routes/todos");

//mount the ASPI routes
app.use("/api/v1",todoRoutes);


//start the server
app.listen(PORT,()=>{
    console.log(`sERVER started sucessfully at ${PORT}`);

})
//connect to the database 
const dbConnect=require("./config/database");
dbConnect();

//default route
app.get("/",(req,res) =>{
    res.send(`<h1> This is HOMEPAGE body </h1>`);
})