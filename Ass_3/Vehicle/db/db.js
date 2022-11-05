const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/vehicleDB").then(()=>{
        console.log("database Connected");
}).catch((e)=>{
    console.log(e)
})