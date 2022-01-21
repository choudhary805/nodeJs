const express= require("express");
const path= require('path');
const res = require("express/lib/response");
const app=express();
const port= 8000 || process.env.PORT;

//public static path
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname, "../templates/views");

app.set("view engine","hbs");
app.set("views",template_path);
app.use(express.static(static_path));


//routing
app.get("/", (req,res)=>{
    res.render("index");
})
app.get("/about", (req,res)=>{
    res.render("about");
})
// app.get("/weather", (req,res)=>{
//     res.render("weather");
// })
app.get("*", (req,res)=>{
    res.render("404");
})
app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
})