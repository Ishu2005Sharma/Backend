const express = require ("express")



const app = express()

app.use(express.json())

connection
const notes = [
    {
        title: "test title 1",
        desc: "test desc 1"
    }
]


// mongodb+srv://vikashsharma9687_db_user:aPUHHMecsHcbjBEm@cluster0.y8edlmr.mongodb.net/

app.get("/" , (req ,res)=>{
    res.send("hello world")

})

app.post("/notes",(req , res)=>{
console.log(req.body)
notes.push(req.body)
console.log(notes)
res.send("note created")
})

app.get("/notes", (req , res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req ,res)=>{
delete notes(req.params.index)
res.send("notes deleted")
})

module.exports = app

