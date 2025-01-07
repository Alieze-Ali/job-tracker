const Users = require("../models/onboarding-models");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
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
        console.log(error);
        res.status(500).json(error);
    }
    
}

const login =  async (req, res) => {
    const {email, password} = req.body;
    try {
        const found = await Users.findOne({ email }).exec();
        const isMatch = await bcrypt.compare(password, found.password)
        if (found && isMatch) res.send(`Welcome, ${found.display_name}`)
        else throw new Error("credentials not found!")  
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}






function hashPassword(password) {
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
        });
    });
}

module.exports = {
    register,
    login
}