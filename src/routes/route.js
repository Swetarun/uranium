const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )
router.post("/getBooksInYear", BookController.getBookInYear )
router.post("/getParticularBooks", BookController.getParticularBook)

router.get("/getBooksData", BookController.getBooksData)
router.get("/bookList", BookController.getBookList)
router.get("/getXINRBooks", BookController.getINRBooks)
router.get("/getRandomBooks", BookController.getRandomBook)

module.exports = router;