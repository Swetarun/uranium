const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/test-me2", function (req, res) {
    res.send("My second ever api!")
})

router.get("/test-me3", function (req, res) {
    res.send("My third ever api!")
})

router.get("/test-me4", function (req, res) {
    res.send("My fourth ever api!")
})
module.exports = router;