const express = require("express")
const app = express()
// 1 endpoint  2 callback
// function getData(){
//     axios.get("localhost:9000/code")
//         .then(response => response.data)  .catch(error => console.log(error))
// }


const users = [
    {name: "John", 
    age: 42,
    lastName: "Mayer", 
    phone: "555-5515", 
    about: "Single man looking for a wife", profession: "Love"
},
    {name: "Crystal", 
    age: 30,
    lastName: "Mullins", 
    phone: "555-5525", 
    about: "Single woman looking for a husband", profession: "Programmer"
    },
    

]
app.get("/users", (request, response) =>{
    response.send(users)
    })


    const info = [

        {
        title: "The time traveling hippy",
        description: "A funny feel good film for the whole family",
        genre: "comedy" 
        },

        {
        title: "Ecowars",
        description: "The Underwater revolution",
        genre: "sci-fi fantasy" 
        }
    
    
    
    
    ]


app.get("/info", (request, response) =>{
    response.send({info})
    
})

const code =[
    {
        class: "React",
        project: "Twitter App"
    },
    {
        class: "fsw-125",
        project: "Building a server"
    },



]
app.get("/code", (request, response) =>{
    response.send({code})
    
})
// app.put()
// app.post()




// two argunents 1 PORT 2 CB
app.listen(9000, () => {
    console.log("the server is running on Port 9000")
})