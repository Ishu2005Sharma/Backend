const mongoose = require("mongoose")

const connectDB = async()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to database")
    })
}

module.exports = connectDB