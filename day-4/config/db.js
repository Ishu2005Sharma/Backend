const { default: mongoose } = require("mongoose")

const connection = async ()=>{
    try {
        let res = await mongoose.connect("mongodb+srv://vikashsharma9687_db_user:aPUHHMecsHcbjBEm@cluster0.y8edlmr.mongodb.net/test")
        console.log("mongodb connected",res)
    } catch (error) {
        console.log("mongodb  not connected",error)
    }
}

module.export =  connection