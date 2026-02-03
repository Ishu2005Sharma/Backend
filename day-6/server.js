const app = require("./src/app")
const mongoose = require("mongoose")
const connectTodb = require("./src/config/database")




connectTodb()

app.listen(3000,()=>{
    
})