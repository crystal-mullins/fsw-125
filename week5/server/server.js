var express = require("express");
const app = express();
 app.use(express.json())






app.use("/bountys", require("./routes/bountyRoute.js"));

// app.use("/movies", require("./routes/bountyRoute.js"));


// app.use("/tvshows", require("./routes/tvshowRouter.js"));

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message })
})


// Listen to this Port

app.listen(9009,function(){
  console.log("Live at Port 9009");
});