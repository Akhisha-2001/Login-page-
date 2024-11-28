 const path = require("path");
 const fs = require("fs")
// //console.log(path.parse(__filename));
// const user = "arju";
//  fs.writeFile(path.join(__dirname,"/api","api.text"),`user name: ${user}`, (err)=>{
//      if(err) throw err;
//  })

// fs.appendFile(path.join(__dirname,"/api","api.text"),`\n user name: ${user}`,(err) =>{
//     if(err) throw err
// });

// fs.readFile(path.join(__dirname,"api","api.text"),"utf8",(err,data) =>{
//     if(err) throw err;
//     console.log(data);
    
// });
// const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on("message", (data) =>{
//     console.log(data.text);
    
// })

// event.emit("message",{text: "logged in"});

// const express = require("express");
// const app= express();

// app.get('/',(req,res) =>{
//     res.json("<h2>Home</h2>");
// });
// app.get('/contact',(req,res) =>{
//     res.json("Contact");
// });
// app.get('*',(req,res) =>{
//     res.status(404);
//     res.send("404");
// })
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

// const express = require("express");
// const app = express();

// app.get('/profile',Token,Validation,(req,res) =>{
//     console.log("User logged");
//     res.send("<h3>Hello..!</h3>");
// });

// function Token(req,res,next) {
//     console.log("Created");
//     setInterval( () => {
//         const TOKEN = "123";
//         req.token = Token;
//         next();
//     },1000);
// }

// function Validation(req,res,next){
//     if(req.token){
//         console.log("Approved");
//         next();
//     }
// }

// const PORT = process.env.PORT || 3001;
// app.listen(PORT);

const express = require("express");
const app = express();
const Token = require('./Middleware/token');
const Validation = require('./Middleware/validation');
const middleware = [Token,Validation];
app.use(newGenerator);
app.get('/profile',middleware,(req,res) =>{
    console.log("User Logged");
    res.send("<h2>New One</h2>");
});
app.get('/',middleware,(req,res,next) =>{
    console.log("Coming to home");
    res.send("<h2>Home</h2>");
});

function newGenerator(req,res,next){
    console.log(new Date());
    next();
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

//const EventEmitter = require("events");
// const event = new EventEmitter();
// event.on("message", (data) =>{
//     console.log(data.text);
    
// })

// event.emit("message",{text: "logged in"});

// const eventEmitter = require('events');
// const event = new eventEmitter();
// event.on("message",(data) =>{
//     console.log(data.text);
// })
// event.emit("message",{text:"updated"});

const user="name";
fs.writeFile((__dirname,"api","./api1.text"),`username = ${user}`,(err,data) =>{
    if (err) throw err;
})


