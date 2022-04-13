const { count } = require("console")
const BookData= require("../models/bookData")
const AuthorData= require("../models/authorData")
//---------------first-----------
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookData.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorData.create(data)
    res.send({msg: savedData})
}

// const getAuthor= async function (req,res){
// let data= await AuthorData.find()
// res.send({msg: data})
// }
//---------------second-----------------------
const listBook= async function(req, res){
    let chetan= await AuthorData.find({authorName: "Chetan Bhagat"}).select({author_id: 1, _id: 0})
    let id= chetan[0].author_id
    //console.log(id)
    let chetanBooks= await BookData.find({author_id: id})
    res.send({msg: chetanBooks})
}
//----------------third--------------------
const findAuthor= async function(req,res){
    let states2= await BookData.findOneAndUpdate(
        {name: "Two states"},
        {$set: {price: 100}},
        {new: true}
    )
    let newPrice= states2.price
    //console.log(newPrice)
    let id= states2.author_id
    let aName= await AuthorData.find({author_id: id}).select({authorName: 1, _id: 0})
    //console.log(id)
    res.send({msg: aName, newPrice })
}

//-------------fourth--------------------------
const findBook= async function (req, res) {
    let find= await BookData.find({ price : { $gte: 50, $lte: 100}}).select({author_id: 1, _id: 0})
    let id= find.map(i => i.author_id)

    let arr=[]
    for(let j=0; j<id.length; j++){
        let a= id[j]
        let auName= await AuthorData.find({author_id: a}).select({authorName: 1, _id:0})
        arr.push(auName)
    }
    const autName= arr.flat()
    //console.log(arr)
    res.send({msg: autName})
}

module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
//module.exports.getAuthor= getAuthor
module.exports.listBook= listBook
module.exports.findAuthor= findAuthor
module.exports.findBook= findBook
