//contactController.js file

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res)=>{
    res.status(200).json({message:"Get all contacts"})
}

//@desc Get specific contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req,res)=>{
    res.status(200).json({message:`Get contact ${req.params.id}`})
}

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req,res)=>{
    console.log("The request body is :",req.body)
    const {name,email,phone} = req.body
    
    //Check for empty fields
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    res.status(200).json({message:"Create new contact"})
}

//@desc Update specific contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req,res)=>{
    res.status(200).json({message:`Update contact ${req.params.id}`})
}

//@desc IUpdate specific contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req,res)=>{
    res.status(200).json({message:`Delete contact ${req.params.id}`})
}

module.exports = {getContacts,getContact,createContact,updateContact,deleteContact}