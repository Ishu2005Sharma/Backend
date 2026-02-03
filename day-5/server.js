const app = require("./src/app");
const mongoose = require("mongoose")
function connectTodb(){
    mongoose.connect("mongodb+srv://vikashsharma9687_db_user:aPUHHMecsHcbjBEm@cluster0.y8edlmr.mongodb.net/day-5")
    .then(()=>{
        console.log("connected to database")
    }

    )
}
connectTodb()
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

