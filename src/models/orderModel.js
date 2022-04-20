const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.Types.ObjectId;
const OrderController= require('../controllers/orderController')

const date = new Date();
const dateStr = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
const orderSchema = new mongoose.Schema( {
    // Write the schema content
    userId: {
        type: ObjectId,
        ref: "newUser"
    },
    productId: {
        type: ObjectId,
        ref: "newProduct"
    },
    amount: Number,
    isFreeAppUser: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
        default: dateStr
        
    }
}, { timestamps: true });

module.exports = mongoose.model('newOrder', orderSchema)
