const express = require("express");
const router = express.Router();


const {
    dashboard,
} = require("../controllers/jobs-controller.js")


router.route("/dashboard").get(dashboard)


module.exports = router;