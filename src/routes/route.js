const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function(req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});
// router.get('/movies', function (req, res) {
//     const names = ['Charlotte\'s Web','Finding Nemo','Frozen','Lilo and Stitch','My Neighbor Totoro','Shaun the Sheep Movie','Toy Story',
//     'Beauty and the Beast','Despicable Me','Inside Out']
//     let arr =[]
//     for(let i = 0; i < names.length; i++){
//         arr.push(names[i])
//     }
//     res.send(arr)
// });

// router.get('/movies/:indexNumber', function (req, res) {
//     const names = ['Charlotte\'s Web','Finding Nemo','Frozen','Lilo and Stitch','My Neighbor Totoro','Shaun the Sheep Movie','Toy Story',
//     'Beauty and the Beast','Despicable Me','Inside Out']
//     let arr;
//     let n = req.params.indexNumber
//     for(let i = 0; i < names.length; i++){
//         if(i == n){
//             arr = names[i]
//         }
//     }
//     res.send(arr)
// });

router.get('/movies/:indexNumber', function (req, res) {
    const names = ['Charlotte\'s Web','Finding Nemo','Frozen','Lilo and Stitch','My Neighbor Totoro','Shaun the Sheep Movie','Toy Story',
    'Beauty and the Beast','Despicable Me','Inside Out']
    let arr;
    let n = req.params.indexNumber
    for(let i = 0; i < names.length; i++){
        if(i < n){
            arr = "use a valid index between 0-9"
        }
        if(i == n){
            arr = names[i]
        }
    }
    res.send(arr)
});

// router.get('/films', function (req, res) {
//     const fNames = [ {
//         'id': 1,
//         'name': 'The Shining'
//        }, {
//         'id': 2,
//         'name': 'Incendies'
//        }, {
//         'id': 3,
//         'name': 'Rang de Basanti'
//        }, {
//         'id': 4,
//         'name': 'Finding Nemo'
//        }]
//        let a = []
//        for(let i=0; i<fNames.length; i++){
//            a.push(fNames[i])
//        }
//     res.send(a)
// });

router.get('/films/:filmId', function (req, res) {
    const fNames = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       let a;
       let n = req.params.filmId
       for(let i=0; i<fNames.length; i++){
           if(n > fNames[i].id){
               a = "No movie exists with this id"
           }
           if(n == fNames[i].id){
               a = fNames[i]
           }
       }
    res.send(a)
});




module.exports = router;
// adding this comment for no reason