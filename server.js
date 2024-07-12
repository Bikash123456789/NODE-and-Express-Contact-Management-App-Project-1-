//server.js
const express = require("express")
const dotenv = require('dotenv').config()
const contactRouter = require("./routes/contactRoutes")
const userRouter = require("./routes/userRoutes")
const errorHandler = require("./middleware/errorHandler")
const connectDB = require("./config/dbConnection")

connectDB()
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use("/api/contacts",contactRouter)
app.use("/api/users",userRouter)
app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`)
})
