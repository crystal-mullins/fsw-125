const express = require("express")
const app = express()
const {v4:uuidv4} = require('uuid')

app.use(express.json())


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
app.listen(9000, () => {
    console.log("the server is running on port 9000")
})