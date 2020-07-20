const {v4:uuidv4} = require('uuid')
const songData = [

        {   number: 1,
            pop: true,
            author: "John Mayer",
            type: "A",
            song: "Astrothunder",
            _id: uuidv4()
        },{
            number: 2,
            pop: true,
            author: "John Mayer",
            type: "B",
            song: "Belief, Bigger Than My Body",
            _id: uuidv4()
        },{
            number: 3,
            pop: true,
            author: "John Mayer",
            type: "C",
            song: "Clarity ",
            _id: uuidv4()
        },{
            number: 4,
            pop: true,
            author: "John Mayer",
            type: "D",
            song: "Daughters"
            ,_id: uuidv4()
        },{
            number: 5,
            author: "John Mayer",
            pop: true,
            type: "G",
            song: "Gravity ",
            _id: uuidv4()
        },{
            number: 6,
            author: "John Mayer",
            pop: true,
            type: "H",
            song:"Half of My Heart, The Heart of Life, Heartbreak Warfare",
            _id: uuidv4()
        },{
            number: 7,
            pop: true,
            author: "John Mayer",
            type: "I",
            song: "I Don't Trust Myself (With Loving You), I'm Gonna Find Another You, In Repair, In the Blood",
            _id: uuidv4()
        },{
            number: 8,
            pop: true,
            author: "John Mayer",
            type: "L",
            song: "Love on the Weekend",
            _id: uuidv4()
        },{
            number: 9,
            pop: true,
            author: "John Mayer",
            type: "N",
            song:"Neon, New Light, No Such Thing ",
            _id: uuidv4()
        },{
            number: 10,
            pop: true,
            type: "Q",
            song: "Queen of California",
            _id: uuidv4()
        },{
            number: 11,
            pop: true,
            author: "John Mayer",
            type: "S",
            song:"Say (song), Shadow Days, Slow Dancing in a Burning Room, Small Worlds (song), Something's Missing, Stop This Train",
            _id: uuidv4()
        },{
            number: 12,
            pop: true,
            author: "John Mayer",
            type: "V",   
            song: "Vultures (song)",
            _id: uuidv4()
        },{
            number: 13,
            pop: true,
            author: "John Mayer",
            type: "W",
            song: ["Waiting on the World to Change", "Who Did You Think I Was"," Who Says", "Who You Love", "Why Georgia"],
            _id: uuidv4()
        },{
            number: 14,
            pop: true,
            author: "John Mayer",
            type: "Y",
            song: "Your Body Is a Wonderland",
            _id: uuidv4()
        }

]
module.exports= songData