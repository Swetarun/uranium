const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});

router.get('/all-candidates', function (req, res) {
    const names = ['Sweta','Tarun','Taksh','Mithun','Swati','Soni','Ankit']
    let arr = []
    for (let i = 0; i<names.length; i++){
        arr.push(names[i])
    }
    res.send(arr)
});

router.get('/candidates', function (req, res) {
    const names = ['Sweta','Tarun','Taksh','Mithun','Swati','Soni','Ankit']
    let arr = []
    let n = req.query.count
    for (let i = 0; i<n; i++){
        arr.push(names[i])
    }
    res.send(arr)
});




module.exports = router;
// adding this comment for no reason