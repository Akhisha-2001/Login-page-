const express = require("express");
const user = express.Router();

const username= "Akhisha";
const password= "Akhisha@123";

user.get('/',(req,res) => {
    if(req.session.user){
        res.render('home')
    }else{
        if(req.session.passwordWrong){
            res.render('login',{msg: 'Invalid Username or Password'});
            req.session.passwordWrong = false;
        }else{
            res.render('login');
        }
    }
})

user.post('/verify',(req,res) => {
    console.log(req.body);

    if(req.body.username ===username && req.body.password ===password){
        req.session.user = req.body.username;
        res.redirect('/home');
    }else{
        req.session.passwordWrong = true;
        res.redirect('/')
    }
})
user.get('/home',(req,res) => {
    if(req.session.user){

        res.render('home')
    }else{
        if(req.session.passwordWrong){
            req.session.passwordWrong = false;
            res.render('login',{msg: 'Invalid Username or Password'});
        }else{
            res.render('login');
        }
    }
})

user.get('/logout',(req,res) => {
    req.session.destroy();
    res.render('login', {msg:"Logged out"})
})



module.exports = user;