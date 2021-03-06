const express = require('express')
const movieRouter = express.Router()
const {v4:uuidv4} = require('uuid')


const movies = [
       {title: "die hard", genre: "action", _id: uuidv4()},
       { title: "Star wars", genre: "fantasy", _id: uuidv4()},
       { title: "The lion king", genre: "fantasy", _id: uuidv4()},
       { title: "friday the 13th", genre: "horror", _id: uuidv4()}
    ]
    
    movieRouter.route("/")
        .get((req, res) => {
        res.send(movies)
    })
        .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuidv4()
        movies.push(newMovie)
        res.send(`Successfully added ${newMovie} to the database`)
    })
    
    
    
    
    
    
    
    module.exports = movieRouter