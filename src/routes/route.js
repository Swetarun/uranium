const express = require('express');
const router = express.Router();
const UserController1= require("../controllers/userController1")
const ProductController= require("../controllers/productController");
const OrderController= require("../controllers/orderController")
const { mid1 } = require('../middlewares/commonMiddlewares');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", mid1, UserController1.createUser)
router.post("/createProduct", ProductController.createProduct)
router.post("/createOrder", mid1, OrderController.createOrder)

module.exports = router;