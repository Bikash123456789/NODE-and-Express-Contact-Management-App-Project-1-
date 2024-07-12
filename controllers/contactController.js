const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

//contactController.js file

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req,res)=>{
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

//@desc Get specific contact
//@route GET /api/contacts/:id
//@access public
const getContact =  asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    res.status(200).json(contact)
})

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req,res)=>{
    console.log("The request body is :",req.body)
    const {name,email,phone} = req.body
    
    //Check for empty fields
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    const contact = await Contact.create({
        name:name,
        email:email,
        phone:phone  
    })

    res.status(200).json(contact)
})

//@desc Update specific contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    )
    res.status(200).json(updatedContact)
})

//@desc IUpdate specific contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    await Contact.deleteOne()
    res.status(200).json(contact)
})

module.exports = {getContacts,getContact,createContact,updateContact,deleteContact}