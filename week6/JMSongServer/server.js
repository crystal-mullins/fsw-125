var express = require("express");
const app = express();
 app.use(express.json());
 const mysql = require('mysql');


 var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'secret'
});
 
connection.connect(function(err) {
  console.log(err)
  if (err) {
    console.error('error connecting: ');
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "secret",
//   database: 'Songlist'
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM Songlist", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });



app.use("/songlist/", require("./jmsongrouter.js"));


app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message })
})


// Listen to this Port

app.listen(9003,function(){
  console.log("Live at Port 9003");
});