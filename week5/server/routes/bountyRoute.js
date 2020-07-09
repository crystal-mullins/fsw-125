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
    {firstName:"John", lastName:"Mayer", living: true, bounty_payout: 900, type: "NINJA", _id:uuidv4()},
    {firstName:"Ruth", lastName:"Babe", living: true, bounty_payout: 55000, type: "Sith", _id:uuidv4()},
    {firstName:"Crystal", lastName:"Mayer", living: true, bounty_payout: 45000, type: "Jedi", _id:uuidv4()},
    {firstName:"Mag", lastName:"Azine", living: false, bounty_payout: 65000, type: "Sith", _id:uuidv4()},

]
//  get all
bountyRouter.get("/", (req, res) => {
    res.status(200)
    res.send(bountys)

})
// get one
bountyRouter.get("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountysId
    const foundBounty = bountys.find(bountys => bountys._id === bountyId)
    if(!foundBounty){
        const error = new Error("500 this is not the Bounty your looking for!")
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundBounty)
})

// get by key

bountyRouter.get("/search/lastName", (req, res, next) => {
    const lastName = req.params.lastName
    if(!lastName){
        const error = new Error("You must provide a last name")
        res.status(500)
        return next(error)
    }
    const filteredBountys = bountys.filter(bountys => bountys.lastName === lastName)
    res.status(200).send(filteredBountys)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bountys.push(newBounty)
    res.status(201).send(`Successfully added ${newBounty} to the database`)

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
    res.status(201).send(updatedBountys)

})


module.exports = bountyRouter



