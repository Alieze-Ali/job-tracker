const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const {OAuth2Client} = require("google-auth-library");


async function getUserData(access_token) {
    try {
        const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
        const data = await response.json();
        console.log("data", data)
        return data;

    } catch(err) {
        console.log(err)
    }
}

router.get("/", async function(req, res, next) {
    const code = req.query.code;
    try {
        const redirectUrl = "http://127.0.0.1:3000/oauth";
        const oAuth2Client = new OAuth2Client(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            redirectUrl
        );

        const response = await oAuth2Client.getToken(code);

        await oAuth2Client.setCredentials(response.tokens);
        console.log("Tokens aquired");

        const user = oAuth2Client.credentials;
        console.log("credentials", user);
        
        const data = await getUserData(user.access_token);
        if (data.given_name) return res.redirect("http://localhost:5173/dashboard");
        else throw Error('Error fetching user data...');
        

    } catch(err) {
        console.log("Error loging in with google", err)
        res.status(500).send("Authentication failed!");
    }
});

module.exports = router;