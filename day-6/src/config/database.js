 const mongoose = require("mongoose")
 
 function connectTodb(){
    mongoose.connect("mongodb+srv://vikashsharma9687_db_user:aPUHHMecsHcbjBEm@cluster0.y8edlmr.mongodb.net/day-6")
    .then(()=>{
console.log("connected to database")

    })
}
module.exports = connectTodb