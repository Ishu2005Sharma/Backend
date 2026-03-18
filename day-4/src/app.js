const express = require("express")

const app = express()
app.use(express.json())

const notes = []

// post method
app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message :"note created successfully"
    })
})

// get method
app.get("/notes",(req,res)=>{
    res.status(200).json({
        message :"notes retrived successfully"
    })
})

// delete method
app.delete("/notes/:id",(req,res)=>{
    const id = req.params.id
    res.status(200).json({
        message :"note deleted successfully"
    })
})

// patch method 
app.patch("/notes/:id",(req,res)=>{
    const id = [req.params.id].description = req.body.description
    res.status(200).json({
        message :"note updated successfully"
    })


})

module.exports = app