const express = require("express");
const router = express.Router()

router.get("/",(req,res)=>{
    res.send({message:"Get all users"})
})

router.post("/",(req,res)=>{
    res.send({message:"Create a new user"})
})

router.get("/:id",(req,res)=>{
    res.send({message:`Get the user ${req.params.id}`})
})

router.put("/:id",(req,res)=>{
    res.send({message:`Update the user ${req.params.id}`})
})

router.delete("/:id",(req,res)=>{
    res.send({message:`Delete the user ${req.params.id}`})
})

module.exports = router