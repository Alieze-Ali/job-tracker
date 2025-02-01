const Users = require("../models/onboarding-models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncWrapper = require("../middleware/async-wrapper")
const { CustomAPIError } = require("../errors/");


const register = asyncWrapper(async (req, res) => {
    const { email, password, display_name } = req.body;
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
        throw new CustomAPIError("Please provide email and password", 400)
    }

    try {    
        const found = await Users.findOne({ email }).exec();
        const isMatch = await bcrypt.compare(password, found.password)
        if (found && isMatch) {
            try {
               const token = jwt.sign(
                {id: found._id, email},
                process.env.JWT_SECRET,
                {expiresIn: "1h"}
               ) 
                res.status(201).json({msg: "login sucessful", token})  
            } catch (error) {
                throw new CustomAPIError("Something went wrong with the token...", 401)
            }
            
        }
        else throw new CustomAPIError("credentials not found!", 400)  
    } catch (error) {
        console.log(error);
        res.json(error);
    }
})



module.exports = {
    register,
    login
}