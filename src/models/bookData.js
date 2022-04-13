const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    author_id: {
        type: Number,
        required: true
    },
    price: Number,
    ratings: Number 
})


 //users
module.exports = mongoose.model('Book2', bookSchema)
