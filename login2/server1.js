const express = require('express');
const app = express();

// app.get('/flights/:from/:to',(req,res) =>{
//     res.send(`flight from ${req.params.from} to ${req.params.to}`);
// });

// app.get('/products/:category',(req,res) =>{
//     res.send(req.params)
// });

app.get('/student',(req,res) =>{
    res.send(req.query.name);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT , () =>{
    console.log("Server is running on 3001");
    
});