// first way
// const math = require("./math.js")

// console.log(math.sum(10, 20))

// console.log(math.subtract(30, 10))

// console.log(math.divide(100, 20))

// console.log(math.multiply(101, 20))
// const result = anything(10, 20)
// console.log(result)

// second example
// const sum = require("./math.js").subtract

// // console.log(sum(10, 20))

// // third example
// console.log(sum(10, 20), subtract(30, 10), divide(100, 20), multiply(101, 20))



// fourth example

console.log(require("./math.js").subtract(20, 10))

console.log(require("./math.js").divide(100, 20))
console.log(require("./math.js").sum(100, 20))
console.log(require("./math.js").multiply(100, 20))



// multiply module
// const sum = require("./math.js")

// const {multiply, setFactor} = require("./math2.js")

// // console.log(sum(20, 18))

// console.log(multiply(20))

// setFactor(10)
// console.log(multiply(20))


// 
// user module
// const sum = require("./math.js")

// const {multiply, setFactor} = require("./math2.js")


// const User = require("./user.js")

// console.log(new User("steve", 30))