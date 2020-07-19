const express = require("express")
const jmSongRouter = express()
const morgan = require('morgan')
const {v4:uuidv4} = require('uuid')

const songlist = require('./songlist')
// middleware
// looks for a request body
jmSongRouter.use(express.json())
// logs requests to the console
jmSongRouter.use(morgan('dev'))
// cont songlist



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



