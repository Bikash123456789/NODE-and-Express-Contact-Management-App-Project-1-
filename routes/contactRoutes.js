const express = require("express");
const router = express.Router()

router.get("/",(req,res)=>{
    res.send({message:"Get all users"})
})

module.exports = router