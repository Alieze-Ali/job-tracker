const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncWrapper = require("../middleware/async-wrapper")
const { CustomAPIError, BadRequestError, UnauthenticatedError } = require("../errors");


const register = asyncWrapper(async (req, res) => {
    const { email, password, display_name } = req.body;

    if (!email || !password || !display_name) throw new BadRequestError("Please provide email, password, and name.")

    try {
        const hash = await bcrypt.hash(password, 10)
        const newUser = await Users.create({
        email,
        password: hash,
        display_name,
       });
       res.json(newUser)
       
    } catch (error) {
        res.status(500).json(error);
    }
    
})

const login =  asyncWrapper(async (req, res) => {
    const {email, password} = req.body;
    
    if (!email || !password) {
        throw new BadRequestError("Please provide email and password.")
    }

    const found = await Users.findOne({ email });
    if (!found) throw new BadRequestError("Email not found.")

    const isMatch = await bcrypt.compare(password, found.password)
    if (!isMatch) throw new UnauthenticatedError("Invalid credentials.")

    const token = jwt.sign(
            {id: found._id, email},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}) 

    res.status(201).json({msg: "login sucessful", token})  

}) 



module.exports = {
    register,
    login
}