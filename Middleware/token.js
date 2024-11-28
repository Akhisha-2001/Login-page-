const express = require("express");
const app = express();
const path = require("path");

app.get('/',(req,res) =>{
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    const sum = num1 + num2;
    res.send(sum);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>{
    console.log("server running");
    
})