var express = require("express");
const app = express();
 app.use(express.json())


app.use("/songlist", require("./jmsongrouter.js"));


app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message })
})


// Listen to this Port

app.listen(9003,function(){
  console.log("Live at Port 9003");
});