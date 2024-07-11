const express = require("express")
const dotenv = require('dotenv').config()
const router = require("./routes/contactRoutes")


const app = express()

const PORT = process.env.PORT || 5000

app.use("/api/contacts",router)




app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`)
})
