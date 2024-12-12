const express = require("express");
const router = express.Router();
const Users = require("../models/onboarding");

router.get("/", (req, res) => {
    res.send({api: "up"});
})

router.post("/register", async (req, res) => {
    const { email, password, display_name } = req.body;
    try {
        const newUser = await Users.create({
        email,
        password,
        display_name,
       });
       res.json(newUser)
       
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
    
})

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
       const found = await Users.findOne({ email, password }).exec();
        if (found) res.send(`Welcome, ${found.display_name}`)
        else throw new Error("credentials not found!")  
    } catch (error) {
        console.log(error);
        res.json(error);
    }
   
})

module.exports = router;