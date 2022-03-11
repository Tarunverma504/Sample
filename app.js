const express= require('express');
const app = express();
const path= require("path");
const port = process.env.PORT || 3000;
const ejs = require("ejs");

const static_parth=path.join(__dirname, "/public");
const template_parth=path.join(__dirname, "/templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_parth));
app.use(express.static('public'));

app.set("view engine", "ejs"); 
app.set("views",template_parth);

app.get("/",async(req, res)=>{
    res.render('template.ejs');
})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})