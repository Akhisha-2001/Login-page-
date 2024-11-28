const express = require("express");
const app = express();
const router = express.Router();
const fs = require('fs');

router.use((req,res,next) =>{
    console.log("kjsfhdf");
    next();
})

fs.writeFile('example.text',"hello", (err)=>{
    if(err) throw err;
    
})

router.get('/profile',(req,res) =>{
    res.send("user profile");
})

app.use((err,req,res,next) =>{
    console.log(err);
    res.status(err.status || 500);

})
app.use((req,res,next) =>{
    console.log("kdjbfskdj");
    next();
})

app.get('/',(req,res) =>{
    res.send("Hello World");
});

const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log("Server is running");
})


// const http = require('http');
// const server = http.createServer((req,res) =>{
//     res.setHeader('content-type','text/plain');
//     res.write("Hello World");
//     res.end();
// })

// server.listen(3001);