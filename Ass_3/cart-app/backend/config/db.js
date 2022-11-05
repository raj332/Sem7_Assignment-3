const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/CartDB",{useNewUrlParser:true},(error)=>{
    error?console.log("Error in DB Connection"):console.log("DB connected")
})

module.exports = mongoose;