let trim = function(){
    let text =  ' function   Up  '
    let result = text.trim();
    console.log(result)
}

let changetoLowerCase = function(){
    let text1 = 'FunctionUp'
    let result1 = text1.toLowerCase();
    console.log(result1)
}

let changeToUpperCase = function(){
    let text2 = 'FunctionUp'
    let result2 = text2.toUpperCase();
    console.log(result2)
}

module.exports.trim1 = trim
module.exports.lower = changetoLowerCase
module.exports.upper = changeToUpperCase