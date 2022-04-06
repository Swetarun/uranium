const express = require('express');
const logger = require('./logger')
const logger1 = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')
const dash = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('I am inside the first route handler')
    // console.log('The endpoint value is', logger.endpoint)
    // console.log('Calling log function')
    // logger.logging()

    logger1.welcome1() //problem 1

    helper.date()
    helper.month()
    helper.info() //problem 2

    formatter.trim1()
    formatter.lower()
    formatter.upper() //problem 3

    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    let result = dash.chunk(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],3)
    console.log(result) //problem 4 --1

    let arr = []
    let result1 = function(){
        let i =1;
        while(i<=10){
            arr.push(2*i-1);
            i++
        }
        console.log(arr)
        return arr
    }
    let result11 = dash.tail(result1())
    console.log(result11) //problem 4---2

    let result2 = dash.union([1,2],[2,3],[3,4],[4,5],[5,6])
    console.log(result2) //problem 4 --3

    let result3 = dash.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']])
    console.log(result3)  //problem 4---4
    res.send('My second ever api!')
});


router.get('/test-me5', function (req, res) {
    res.send('My final ever api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason