const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

const celebritiesRouter = require("../routes/celebrities.routes.js")
router.use("/celebrities", celebritiesRouter)

 const moviesRouter = require("../routes/movies.routes.js")
 router.use("/movies", moviesRouter)


module.exports = router;
