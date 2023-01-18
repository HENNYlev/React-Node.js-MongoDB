const express = require('express');
const moviesBL = require('../models/moviesBL');
const router = express.Router();

const getMovies = async (req, res, next) => {
    const movies = await moviesBL.getAllMovies()
    if (movies.length > 0) {
        console.log("Already have persons")
        next()
    } else {
        await moviesBL.getAllMoviesFromJson()
        next()
    }

}

router.get("/", getMovies, async function (req, res) {
    try {
        const movies = await moviesBL.getAllMovies()
        console.log("movies router");
        res.status(200).json(movies)
    } catch (err) {
        res.status(500).json({ msg: err })
    }

})
router.get("/:id", async function (req, res) {
    console.log("get")
    try {
        let id = req.params.id;
        const movie = await moviesBL.getMovieById(id);
        res.status(200).json(movie);
        console.log(movie);
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})
router.post("/", async function (req, res) {
    console.log("posttttttttttttttttttttt")
    try {
        const status = await moviesBL.createMovie(req.body);
        console.log(status);
        res.status(200).json({ msg: status });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: err })
    }
})
router.put("/:id", async function (req, res) {
    const id = req.params.id
    const movie = req.body

    const status = await moviesBL.updateMovie(id, movie)

    res.status(200).json({ msg: status })
})
router.delete("/:id", async function (req, res) {
    try {
        const status = await moviesBL.deleteMovie(req.params.id);
        res.status(200).json({ msg: status })
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})
module.exports = router;