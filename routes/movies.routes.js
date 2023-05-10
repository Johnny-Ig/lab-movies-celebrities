const router = require("express").Router();
const Movie = require("../models/movie.model.js")
const Celebrity = require("../models/celebrity.model.js")

//! aqui las rutas de movies

router.get("/create", (req,res, next)=>{
    Celebrity.find()
   
    .then((allCelebrities)=>{
        console.log(req.body)
        res.render("movies/new-movie.hbs", {
            allCelebrities
        })
    })
    .catch((error)=>{
        next(error)
    })
    
})


router.post("/create", (req,res, next)=>{
    console.log(req.body);
    Movie.create({
        title: req.body.title,
    genre: req.body.genre,
    plot : req.body.plot,
    cast: req.body.cast
    })
    .then(()=>{
        res.redirect("/movies")
    })
})

router.get("/", (req,res, next)=>{
    Movie.find()
   
    .then((allMovies)=>{
        console.log(allMovies)
        res.render("movies/movies.hbs", {
            allMovies
        })
    })
    .catch((error)=>{
        next(error)
    })
})

router.get("/:id",(req,res, next)=>{
    Movie.findById(req.params.id)
    .populate("cast")
    .then((filmDetails)=>{
        res.render("movies/movie-details.hbs", {
            filmDetails: filmDetails
        })
    })
    .catch((error)=>{
        next(error)
    })
})


module.exports = router;