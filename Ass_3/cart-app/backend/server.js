const express = require('express');
const app= express();
const cors= require('cors');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/product',require("./routes/product"))
app.get('/hello',(req,res)=>{
    res.send("hello world")
})

app.listen('3000',()=>{
    console.log("listening 3000")
})