let axios = require("axios")
//----------------second------------------
let temperature= async function(req, res){
    try{
    let city= req.query.q
    let id = req.query.appid

    let options= {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
    }
    let result= await axios(options)
    let temperature1= result.data.main.temp
    res.status(200).send({ msg: `Temperature of London is ${temperature1}` })
    }
    catch(err){
        res.status(500).send({ msg: err.message })
    }
}
//---------------second--2--------------------------------

let sortTemperature= async function(req, res){
    try{
        let cities= ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cities1 = []
        let id= req.query.appid

        for(let i =0; i<cities.length; i++){
            let sortCities= { city: cities[i] }
            let options= {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${id}`
            }
            let result= await axios(options)
            sortCities.temp= result.data.main.temp
            cities1.push(sortCities)
        }
        let sortedCities= cities1.sort(function(a,b){
            return a.temp - b.temp
        })
        res.status(200).send({ msg: sortedCities})
    }
    catch(err){
        res.status(500).send({ msg: err.message })
    }
}
module.exports.temperature= temperature
module.exports.sortTemperature= sortTemperature