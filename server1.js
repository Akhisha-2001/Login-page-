// const http = require("http");
// const server = http.createServer((req,res) =>{
//     res.write(200,{"content type" :  "text/html"});
//     res.write("This is from server");
//     res.end();
// })
// server.listen(8080);

// const express = require('express');
// const app = express();

// app.get('/',(req,res) =>{
//     res.send("Hello..!");
// })
// const PORT = process.env.PORT || 8080;
// app.listen(PORT);

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const server = http.createServer((req,res) =>{
//     // if(req.url ==='/contact'){
//     //     fs.readFile(path.join(__dirname, "views","index.html"),"utf8",(err,data) =>{
//     //         if(err) throw err;
//     //         res.writeHead(200,{'content type':'text/html'});
//     //         res.write(data);
//     //         res.end();
//     //     })
//     // }
//     const user = "name";
//     fs.writeFile(path.join(__dirname,"views","index.html"),`username: ${user}`,(err)=>{
//         if (err) throw err;
//     })
// })
// server.listen(8080);

const express = require('express');
const app = express();
app.use(newGenerator);
app.get('/profile',token,valid,(req,res) =>{
    console.log("used logged");
    res.send("looged in");
})
app.get('/',token,valid,(req,res,next) =>{
    console.log("coming to home");
    res.send("Home");
    next();
})

function newGenerator(){
    console.log(new Date());
    next();
}
function token(){
    console.log("created");
    next();
}
function valid(){
    console.log("approved");
    next();
    return;
}
const PORT = process.env.PORT||3001;
app.listen(PORT);

const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret :"secretKey",
    resave : false,
    saveUninitialized : true,
    cookie : {maxAge:60000}
}))

app.get('setsession',(req,res) =>{
    req.session.user = "hello";
    res.send("set session data");
});
app.get('/getsession',(req,res) =>{
    if(req.session.user){
        res.send("hgv")
    }
    else{
        res.send("ouyd");
    }
})2