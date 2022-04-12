const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String, 
        required: true
    },
    authorName: String, 
    tags: [String],
    totalPages: Number,
    stockAvailable: Boolean,
    prices: {
        indianPrice: String,
        europeanPrice: String,
    },
    year: {type: Number, default: 2021}
}, { timestamps: true });


module.exports = mongoose.model('Book1', bookSchema) //books1

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
