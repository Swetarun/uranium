const AuthorModel = require("../models/authorData")
const PublisherModel = require("../models/publisherData")
const BookModel = require("../models/bookData")


//----------First----------------------------
const createAuthor = async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({ data: authorCreated })
}

//-----------------Second----------------------
const createPublisher = async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({ data: publisherCreated })
}

//-----------------Third-----------------------

const createBook = async function (req, res) {
    let book = req.body
    
    if (book.author == null || book.publisher == null) {
        res.send({ Error: "All details required" })
    }
    else {
        let author1 = await AuthorModel.find().select({ _id: 1 })
        let publisher1 = await PublisherModel.find().select({ _id: 1 })
        
        for (let i = 0; i < author1.length; i++) {
            let a = author1[i]._id == book.author
            if (a) {
                for (let j = 0; j < publisher1.length; j++) {
                    let b= publisher1[j]._id == book.publisher
                    if (b) {
                        let bookCreated = await BookModel.create(book)
                        res.send({ msg: bookCreated})
                       return
                    }
                }
                res.send({ msg: "Publisher not found" })
                
                return
            }
        }
        res.send({ msg: "Author  not found" })
    }
    
}

//-----------Fourth---------------------------
const getBooksWithAuthorPublisher = async function (req, res) {
    let allBook = await BookModel.find().populate('author').populate('publisher')
    res.send({data: allBook})

}

module.exports.createAuthor = createAuthor
module.exports.createPublisher = createPublisher
module.exports.createBook = createBook
module.exports.getBooksWithAuthorPublisher = getBooksWithAuthorPublisher