const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const controller1 = require("../controllers/controller1")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/batches", controller1.createBatch)
router.post("/developers", controller1.createDeveloper)
router.get("/scholarship-developers", controller1.getScholarDeveloper)
router.get("/developers", controller1.getDeveloper)

module.exports = router;