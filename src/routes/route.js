const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const controller1= require("../controllers/controller1")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", controller1.createAuthor  )
router.post("/createPublisher", controller1.createPublisher)
router.post("/createBook", controller1.createBook  )
router.get("/getBooksWithAuthorPublisher", controller1.getBooksWithAuthorPublisher)

router.get("/getAuthorsData", authorController.getAuthorsData)

//router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;