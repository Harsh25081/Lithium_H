const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

const moviesArray = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']

router.get("/GET/movies",function(req,res){
    res.send(moviesArray);
})

router.get("/GET/movies/:indexNumber",function(req,res){
    let movieindex = req.params.indexNumber;
    if(movieindex < moviesArray.length && movieindex >= 0){
        res.send(moviesArray[movieindex]);
    }else{
        res.send("Invalid Index ");
    }   
})

let films = [ {
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
   
router.get("/GET/films",function(req,res){
    res.send(films);
})

router.get("/GET/films/:filmId",function(req,res){
    let filmparam = req.params.filmId
    let filmArrId = films.find(ele=>ele.id == filmparam)
    if(filmArrId){
        res.send(filmArrId)
    }else{
        res.send("No movie exists with this id")
    }
})

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res){
//     console.log("The path params in the request are : ", req.params)
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })


// // Example 1 for path params
// router.get('/students/:studentName', function(req, res){
//     // ':' denotes that the following part of route is a variable
//     // The value of this variable is what we are sending in the request url after /students
//     // This value is set in the form of an object inside req.params
//     // The object contain key value pairs
//     // key is the variable in the route
//     // value is whatever dynamic value sent in the request url
//     let myParams = req.params

//     // params attribute is fixed in a request object
//     // params contains the path parameters object
//     console.log("The path params in the request are : ", myParams)
//     res.send('The full name is ' + myParams.studentName )
// })

// Example 2 for path params
// router.get('/student-details/:name', function(req, res){
//     let requestParams = req.params
//     console.log("This is the request ", requestParams)
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
//     res.send('Dummy response')
// })

module.exports = router;