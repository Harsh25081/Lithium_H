const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

// let arr = [1, 2, 3, 5, 6, 7]
// router.get("/sol1", function (req, res) {
//     let sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     let max = arr[arr.length - 1];
//     let totalsm = (max * (max + 1)) / 2
//     let missingnmber = totalsm - sum;
//     res.send({ "data": missingnmber })
// })

let arr2 = [33,34,35,37,38]
router.get("/sol2",function(req,res){
    let sum = 0;
    let firstelem = arr2[0];
    let lastelem = arr2[arr2.length-1]
    let n = arr2.length + 1;
    let totalsum = (n*(firstelem+lastelem)/2)
    for (i = 0; i < arr2.length; i++) {
        sum = sum + arr2[i];
    }
    let missingnmber = totalsum - sum
    res.send({"data":missingnmber})
})




// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get("/movies/:indexNumber", function(req, res){
//     const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
//     console.log(req.params.indexNumber)
//     let movieIndex = req.params.indexNumber
//     //check index value. less than 0 or greater than array (length - 1) are not valid
//     if(movieIndex<0 || movieIndex>=movies.length) {
//         //if the index is invalid send an error message
//         return res.send('The index value is not correct, Please check the it')
//     }

//     //if the index was valid send the movie at that index in response
//     let requiredMovie = movies[movieIndex]
//     res.send(requiredMovie)
// })

// router.get("/shoes", function(req, res){
//     let queryParams = req.query
//     let brand = queryParams.brand
//     let discount = queryParams.discount
//     let color = queryParams.color
//     console.log('The brand selected is ', brand)
//     console.log('The discount option selected is ', discount)
//     console.log('The color selected is ', color)
//     res.send("dummy response")
// })

// // uses query params
// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// // use path param
// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })

// router.get("/films", function(req, res){
//     const films = [ {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Nemo"
//        }]
//        //send all the films
//       res.send(films) 
// })

// router.get("/films/:filmId", function(req, res){
//     const films = [ {
//         "id": 1,
//         "name": "The Shining"
//        }, {
//         "id": 2,
//         "name": "Incendies"
//        }, {
//         "id": 3,
//         "name": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "name": "Finding Nemo"
//        }]

//        let filmId = req.params.filmId

//        //iterate all the films
//        //search for a film whose id matches with the id recevied in request
//        for(let i = 0; i < films.length; i++){
//            let film = films[i]
//            if(film.id == filmId) {
//                //if there is a match return the response from here
//                return res.send(film)
//            }
//        }

//        //if there is no match give an error response
//        res.send("The film id doesn't match any movie")
// })

module.exports = router;
// adding this comment for no reason