var express = require("express");
const app = express();
 app.use(express.json())






app.use("/bountys", require("./routes/bountyRoute.js"));

// app.use("/movies", require("./routes/bountyRoute.js"));


// app.use("/tvshows", require("./routes/tvshowRouter.js"));




// Listen to this Port

app.listen(9000,function(){
  console.log("Live at Port 9000");
});