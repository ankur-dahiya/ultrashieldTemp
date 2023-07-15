const express = require("express");
const sendmail = require("./middleware/sendmail");
const app = express();

const PORT = 5001;

app.get("/",(req,res)=>{
    res.send("working");
});

app.get("/sendmail",sendmail,(req,res)=>{
    res.send("Success");
});

app.listen(PORT,()=>{
    console.log("app is running on "+PORT+" port");
});