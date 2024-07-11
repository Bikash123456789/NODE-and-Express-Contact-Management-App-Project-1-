const express = require("express")
const dotenv = require('dotenv').config()


const app = express()

const PORT = process.env.PORT || 5000

app.get("/api/contacts",(req,res)=>{
    // Send Normal Message to client
    // res.send("Hello Bikash")

    // Send json response to client
    // res.json({message:"Get all users"})

    // Send json response to Client with status code
    res.status(200).json({message:"Get all users"})
})


app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`)
})
