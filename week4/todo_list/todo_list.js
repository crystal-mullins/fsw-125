const express = require("express")
const app = express()
const todoRouter = express.Router()
const {v4:uuidv4} = require('uuid')
const morgan = require('morgan')
app.use(morgan('dev')) 
app.use(express.json())


const todo_list = [


    {
        item:"Become a developer", 
        description:"learn how to build amazing content",
        imageUrl: "https://unsplash.com/photos/qjnAnF0jIGk", 
        completed: false, 
        _id:uuidv4()
},
{
        item:"Love a developer", 
        description:"learn how to build amazing relationships",
        imageUrl: "https://unsplash.com/photos/qjnAnF0jIGk", 
        completed: true, 
        _id:uuidv4()
},

]

    // {firstName:"John", lastName:"Mayer", living: true, bounty_payout: 45000, type: "Jedi", _id:uuidv4()},
    // {firstName:"Ruth", lastName:"Babe", living: true, bounty_payout: 55000, type: "Sith", _id:uuidv4()},
    // {firstName:"Crystal", lastName:"Mayer", living: true, bounty_payout: 45000, type: "Jedi", _id:uuidv4()},
    // {firstName:"Mag", lastName:"Azine", living: false, bounty_payout: 65000, type: "Sith", _id:uuidv4()},


// get all
app.get("/todo_list", (req, res) => {
    res.send(todo_list)

})

// get one

app.get("/todoId ", (req, res) => {
    res.send(todo_list)
    const todoId = req.params.todoId
    const addTodo = todo_list.find(todo_list => todo_list._id === todoId)
    res.send(addTodo)


})

// app.get("./search/item", (req, res) => {
//     const item = req.query.item
//     const new_list = todo_list.filter(todo_list => todo_list.item === item)
//     res.send(new_list)

// })


app.post("/todo_list", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid4()
    todo_list.push(newTodo)
    res.send(`Successfully added ${newTodo} to the database`)

})

// update one
app.put("/todo_list/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todo_list.findIndex(todo_list => todo_list._id === todoId)
    const updateTodo = Object.assign(todo_list[todoIndex], req.body)
    res.send(updateTodo)
})

app.delete("/todo_list/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todo_list.findIndex(todo_list => todo_list._id === todoId)
    todo_list.splice(todoIndex, 1)
    res.send("successfully deleted todo")
})


app.listen(3000,function(){
      console.log("Live at Port 3000");
    });

