const BatchModel = require("../models/batchModel")
const DeveloperModel = require("../models/developerModel")

//------------first----------------------------
const createBatch = async function (req, res) {
    let batch1 = req.body
    let batchCreated = await BatchModel.create(batch1)
    res.send({ data: batchCreated })
}

//-------------second--------------------
const createDeveloper = async function (req, res) {
    let developer1 = req.body
    let developerCreated = await DeveloperModel.create(developer1)
    res.send({ data: developerCreated })
}

//---------------third---------------------
const getScholarDeveloper = async function (req, res) {
    let scholar = await DeveloperModel.find({
        $and: [
            { gender: "female" },
            { percentage: { $gte: 70 } }
        ]
    })
    res.send({ data: scholar })
}

//-----------------fourth-------------------
const getDeveloper = async function (req, res) {
    let develop = req.query.percentage
    let batch = req.query.batch

    let batchId = await BatchModel.find({ name: batch }).select({ _id: 1 })
    
    if (batchId.length === 0) {
        res.send({ Error: "Batch does not exist" })
        return
    }
    else {
        let developp = await DeveloperModel.find({
            $and: [
                { batch: batchId },
                { percentage: { $gte: develop } }
            ]
        })
        if (developp.length === 0) {
            res.send({ Error: "Data not found" })
        }
        else {
            res.send({ data: developp })
        }
        
    }
}


module.exports.createBatch = createBatch
module.exports.createDeveloper = createDeveloper
module.exports.getScholarDeveloper = getScholarDeveloper
module.exports.getDeveloper = getDeveloper