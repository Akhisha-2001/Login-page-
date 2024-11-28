// const sayHello = require("./module");

//  sayHello.sayHello();
//  sayHello.next();
//  sayHello.another();
//  sayHello.display(2,3);
// sayHello.student.fullName();
// console.log(sayHello.student.place);

// var cl = require("cli-color");
// console.log(cl.blue.underline("Hello World"));

// var uc = require("upper-case");
// console.log(uc.upperCase("hi"));
//console.log(__dirname);

// const interval = setInterval(function(){
//     console.log("MERN");
// },1000);

// const net = setTimeout(function() {
//     clearInterval(interval)},4000);
// //clearTimeout(net);

// var oper = require('os');
// console.log(oper.type());
// console.log(oper.arch());
// console.log(oper.platform());
// console.log(oper.release());
// console.log(oper.version());
// console.log(oper.uptime());
// console.log(oper.userInfo());
// console.log(oper.totalmem());
// console.log(oper.freemem());
// console.log(oper.networkInterfaces());

var file = require('fs');

//read file
// file.readFile("./text.txt","utf-8",function(err,data){
//     if(err){
//         console.log(err);    
//     }else{
//         console.log(data);    
//     }
// })

//create file
// file.writeFile(
//     'new.txt',
//     'This is the continuation of text file',
//     (err) => {
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("completed");
//         }
//     } 
// )

// file.appendFile(
//     'next.txt',
//     'This is the continuation of text file',
//     (err) => {
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("completed");
//         }
//     } 
// )


//rename file
// file.rename("./text.txt","./sample.txt",(err) =>{
//     if(err){
//         console.log(err);
        
//     }
//     else{
//         console.log("renamed");
        
//     }
// })

//delete file

file.unlink("./next.txt",(err) => {
    if(err){
        console.log(err);
        
    }else{
        console.log("con");
        
    }
    
})

















