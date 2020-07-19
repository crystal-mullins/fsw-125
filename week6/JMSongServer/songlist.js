const {v4:uuidv4} = require('uuid')
const songData = [

        {   number: 1,
            pop: true,
            author: "John Mayer",
            type: "A",
            songs: "Astrothunder",
            _id: uuidv4()
        },{
            number: 2,
            pop: true,
            author: "John Mayer",
            type: "B",
            songs: "Belief, Bigger Than My Body",
            _id: uuidv4()
        },{
            number: 3,
            pop: true,
            author: "John Mayer",
            type: "C",
            songs: "Clarity ",
            _id: uuidv4()
        },{
            number: 4,
            pop: true,
            author: "John Mayer",
            type: "D",
            songs: "Daughters"
            ,_id: uuidv4()
        },{
            number: 5,
            author: "John Mayer",
            pop: true,
            type: "G",
            songs: "Gravity ",
            _id: uuidv4()
        },{
            number: 6,
            author: "John Mayer",
            pop: true,
            type: "H",
            songs:"Half of My Heart, The Heart of Life, Heartbreak Warfare",
            _id: uuidv4()
        },{
            number: 7,
            pop: true,
            author: "John Mayer",
            type: "I",
            songs: "I Don't Trust Myself (With Loving You), I'm Gonna Find Another You, In Repair, In the Blood",
            _id: uuidv4()
        },{
            number: 8,
            pop: true,
            author: "John Mayer",
            type: "L",
            songs: "Love on the Weekend",
            _id: uuidv4()
        },{
            number: 9,
            pop: true,
            author: "John Mayer",
            type: "N",
            songs:"Neon, New Light, No Such Thing ",
            _id: uuidv4()
        },{
            number: 10,
            pop: true,
            type: "Q",
            songs: "Queen of California",
            _id: uuidv4()
        },{
            number: 11,
            pop: true,
            author: "John Mayer",
            type: "S",
            songs:"Say (song), Shadow Days, Slow Dancing in a Burning Room, Small Worlds (song), Something's Missing, Stop This Train",
            _id: uuidv4()
        },{
            number: 12,
            pop: true,
            author: "John Mayer",
            type: "V",   
            songs: "Vultures (song)",
            _id: uuidv4()
        },{
            number: 13,
            pop: true,
            author: "John Mayer",
            type: "W",
            songs: ["Waiting on the World to Change", "Who Did You Think I Was"," Who Says", "Who You Love", "Why Georgia"],
            _id: uuidv4()
        },{
            number: 14,
            pop: true,
            author: "John Mayer",
            type: "Y",
            songs: "Your Body Is a Wonderland",
            _id: uuidv4()
        }

]
module.exports= songData