const express = require("express")
const app = express()
const morgan = require('morgan')
const {v4:uuidv4} = require('uuid')
// middleware
// looks for a request body
app.use(express.json())
// logs requests to the console
app.use(morgan('dev'))

const bountys = [
    {firstName:"Matt", lastName:"Madd", living: false, bounty_payout: 4000, type: "Sith", _id:uuidv4()},
    {firstName:"John", lastName:"Mayer", living: true, bounty_payout: 45000, type: "Jedi", _id:uuidv4()},
    {firstName:"Ruth", lastName:"Babe", living: true, bounty_payout: 55000, type: "Sith", _id:uuidv4()},
    {firstName:"Crystal", lastName:"Mayer", living: true, bounty_payout: 45000, type: "Jedi", _id:uuidv4()},
    {firstName:"Mag", lastName:"Azine", living: false, bounty_payout: 65000, type: "Sith", _id:uuidv4()},

]

app.get("/bountys", (req, res) => {
    res.send(bountys)

})
app.post("/bountys", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bountys.push(newBounty)
    res.send(`Successfully added ${newBounty} to the database`)

})

app.delete("/bountys/:bountysId", (req, res) => {
    const bountysId = req.params.movieId
    console.log(bountysId)
    const bountysIndex = bountys.findIndex(bountys => bountys._id === bountysId)
    bountys.splice(bountysIndex, 1)
    res.send("Successfully delete bounty")
})

app.put("/bountys/:bountysId", (req, res) => {

    const bountysId = req.params.bountysId
    console.log(bountysId)
    const updateObject = req.body
    const bountysIndex = bountys.findIndex(bountys => bountys._id === bountysId)
    const updatedBountys = Object.assign(bountys[bountysIndex], updateObject)
    res.send(updatedBountys)

})



var port = 9001
app.listen(port, () => {
    console.log("the server is running on " + port)
})