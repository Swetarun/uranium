const midGlb= function(req, res, next){
  
    // current timestamp in milliseconds
    const timestamp = Date.now();
     
    const dateObject = new Date(timestamp);
    const date = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();
 
// prints date & time in YYYY-MM-DD HH:MM:SS format
const ip1= req.ip;
const url= req.originalUrl;
console.log(`${year}-${month}-${date} ${hours}:${minutes}:${seconds}, ${ip1}, ${url}`);

    next()
}


module.exports.midGlb=midGlb
