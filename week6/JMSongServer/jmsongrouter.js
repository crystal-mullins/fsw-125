const express = require("express")
const jmSongRouter = express()
const morgan = require('morgan')
const {v4:uuidv4} = require('uuid')
// middleware
// looks for a request body
jmSongRouter.use(express.json())
// logs requests to the console
jmSongRouter.use(morgan('dev'))
// cont songlist

const songlist = [

    {
        type: "A",
        songs: "Astrothunder",
        _id: uuidv4()
    },{
        type: "B",
        songs: "Belief, Bigger Than My Body",
        _id: uuidv4()
    },{
        type: "C",
        songs: "Clarity ",
        _id: uuidv4()
    },{
        type: "D",
        songs: "Daughters"
        ,_id: uuidv4()
    },{
        type: "G",
        songs: "Gravity ",
        _id: uuidv4()
    },{
        type: "H",
        songs:"Half of My Heart, The Heart of Life, Heartbreak Warfare",
        _id: uuidv4()
    },{
        type: "I",
        songs: "I Don't Trust Myself (With Loving You), I'm Gonna Find Another You, In Repair, In the Blood",
        _id: uuidv4()
    },{
        type: "L",
        songs: "Love on the Weekend",
        _id: uuidv4()
    },{
        type: "N",
        songs:"Neon, New Light, No Such Thing ",
        _id: uuidv4()
    },{
        type: "Q",
        songs: "Queen of California",
        _id: uuidv4()
    },{
        type: "S",
        songs:"Say (song), Shadow Days, Slow Dancing in a Burning Room, Small Worlds (song), Something's Missing, Stop This Train",
        _id: uuidv4()
    },{
         type: "V",   
        songs: "Vultures (song)",
        _id: uuidv4()
    },{
        type: "W",
        songs: "Waiting on the World to Change, Who Did You Think I Was, Who Says, Who You Love, Why Georgia",
        _id: uuidv4()
    },{
        type: "Y",
        songs: "Your Body Is a Wonderland",
        _id: uuidv4()
    }

]

//  get all
jmSongRouter.get("/", (req, res) => {
    res.status(200)
    res.send(songlist)

})
// get one
jmSongRouter.get("/:songlistId", (req, res, next) => {
    const songlistId = req.params.songlistId
    const foundSong = songlist.find(songlist => songlist._id === songlistId)
    if(!foundSong){
        const error = new Error("500 this is not the song your looking for!")
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundSong)
})

// get by key value

jmSongRouter.get("/search/type", (req, res, next) => {
    const type = req.query.type
    const filteredSongs = songlist.filter(songlist => {
        console.log(songlist)
    return songlist.type === type})

    console.log()
    if(!type){
        const error = new Error("You must provide letter")
        res.status(500)
        return next(error)
    }
    
    res.status(200).send(filteredSongs)
})

jmSongRouter.post("/", (req, res) => {
    const newSong = req.body
    newSong._id = uuidv4()
    songlist.push(newSong)
    res.status(201).send(`Successfully added ${newSong} to the database`)

})

// post one
jmSongRouter.post("/", (req, res) => {
    const newSong = req.body
    newSong._id = uuidv4()
    songlist.push(newSong)
    res.send(`Successfully added ${newSong.type} to the database`)

})
// delete one
jmSongRouter.delete("/:songlistId", (req, res) => {
    const songlistId = req.params.songlistId
    const songIndex = songlist.findIndex(songlist => songlist._id === songlistId)
    songlist.splice(songIndex, 1)
    res.send("Successfully delete songs")
})

//  update one
jmSongRouter.put("/:Id", (req, res) => {
    const songlistId = req.params.Id
    console.log(songlistId)
    const songIndex = songlist.findIndex(songlist => songlist._id === songlistId)
    const updatedSongList = Object.assign(songlist[songIndex], req.body)
    res.status(201).send(updatedSongList)

})


module.exports = jmSongRouter



