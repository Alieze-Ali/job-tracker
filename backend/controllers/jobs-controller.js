const Users = require("../models/Users");
const jwt = require("jsonwebtoken");


const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (authHeader) {
        try {
            const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
            res.status(200).json({msg: `Welcome to your dashboard, ${decoded.email}!`})            
        } catch (error) {
            throw new Error("User could not be verified.")
        }
        

    } else {
        res.status(401).json({msg: "Token could not be verifired."})
    }
    
}


module.exports = {
    dashboard
}