const express = require("express")
const bountyRouter = express()
const morgan = require('morgan')
const {v4:uuidv4} = require('uuid')
// middleware
// looks for a request body
bountyRouter.use(express.json())
// logs requests to the console
bountyRouter.use(morgan('dev'))

const bountys = [
    {firstName:"Matt", lastName:"Madd", living: false, bounty_payout: 4000, type: "Sith", _id:uuidv4()},
    {firstName:"John", lastName:"Mayer", living: true, bounty_payout: 90000000, type: "NINJA", _id:uuidv4()},
    {firstName:"Ruth", lastName:"Babe", living: true, bounty_payout: 55000, type: "Sith", _id:uuidv4()},
    {firstName:"Crystal", lastName:"Mayer", living: true, bounty_payout: 45000, type: "Jedi", _id:uuidv4()},
    {firstName:"Mag", lastName:"Azine", living: false, bounty_payout: 65000, type: "Sith", _id:uuidv4()},

]
//  get all
bountyRouter.get("/", (req, res) => {
    res.send(bountys)

})
// get one
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountysId
    const foundBounty = bountys.find(bountys => bountys._id === bountyId)
    res.send(foundBounty)
})

// get by key

bountyRouter.get("./serch/lastName", (req, res) => {
    const lastName = req.params.lastName
    const filteredBountys = bountys.filter(bountys => bountys.lastName === lastName)
    res.send(filteredBountys)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bountys.push(newBounty)
    res.send(`Successfully added ${newBounty} to the database`)

})

// post one
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bountys.push(newBounty)
    res.send(`Successfully added ${newBounty.lastName} to the database`)

})
// delete one
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountysId = req.params.movieId
    const bountysIndex = bountys.findIndex(bountys => bountys._id === bountysId)
    bountys.splice(bountysIndex, 1)
    res.send("Successfully delete bounty")
})

//  update one
bountyRouter.put("/:Id", (req, res) => {
    const bountysId = req.params.Id
    console.log(bountysId)
    const bountysIndex = bountys.findIndex(bountys => bountys._id === bountysId)
    const updatedBountys = Object.assign(bountys[bountysIndex], req.body)
    res.send(updatedBountys)

})




// var port = 9000
// bountyRouter.listen(port, () => {
//     console.log("the server is running on " + port)
// })

module.exports = bountyRouter



// const express = require('express')
// const movieRouter = express.Router()

// const {v4:uuidv4} = require('uuid')
// // import { v4 as uuidv4 } from 'uuid';
// // uuidv4(); 


// const movies = [
//    {title: "die hard", genre: "action", _id: uuidv4()},
//    { title: "Star wars", genre: "fantasy", _id: uuidv4()},
//    { title: "The lion king", genre: "fantasy", _id: uuidv4()},
//    { title: "friday the 13th", genre: "horror", _id: uuidv4()}
// ]

// movieRouter.route("/")
//     .get((req, res) => {
//     res.send(movies)
// })
//     .post((req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send(`Successfully added ${newMovie} to the database`)
// })







// module.exports = movieRouter