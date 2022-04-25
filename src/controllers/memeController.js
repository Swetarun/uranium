let axios= require("axios")
//-------------third---------------------
let updateMeme= async function(req, res){
     try{
        let id= req.query.template_id
        let first= req.query.text0
        let second= req.query.text1
        let user= req.query.username
        let psd= req.query.password

        let options= {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${first}&text1=${second}&username=${user}&password=${psd}`
        }
        let result= await axios(options)
        console.log(result.data)
    
        res.status(200).send({data: result.data.data})
    }
    catch(err){
        res.status(500).send({msg: err.message})
    }
}

module.exports.updateMeme= updateMeme