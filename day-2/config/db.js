const { default: mongoose } = require("mongoose")

const connectdb =  async() =>{
    try {
       let connection = await mongoose.connect ("") 
    } 
    catch (error) {
        
    }

}