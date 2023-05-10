const router = require("express").Router();

const Celebrity = require("../models/celebrity.model.js")


//! AQUI LAS RUTAS DE CELEBRITIES
//!GET
router.get("/create", (req,res, next)=>{

    res.render("celebrities/new-celebritie.hbs")
})

//!POST

router.post("/create", (req,res, next)=>{
    Celebrity.create({
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    })
    .then(()=>{
        res.redirect("/celebrities")
    })
    .catch((error)=>{
        next(error)
    })
})


//!GET 

router.get("/", (req,res, next)=>{
    Celebrity.find()
   
    .then((allCelebrities)=>{
        console.log(req.body)
        res.render("celebrities/celebrities.hbs", {
            allCelebrities
        })
    })
    .catch((error)=>{
        next(error)
    })
})

module.exports = router;