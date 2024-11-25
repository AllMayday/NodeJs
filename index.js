const express = require("express"); 
const app = express();              

// It isn't enough toi just import Express. It is necessary to initialize it 
// in a variable so it may be used, as you'll see above

app.get("/",function(req,res){
    res.send("Response caught");
    // Response is always necessary in a route, else the function
    // keeps reloading itself, never returning anything to user
    // .send ENDS THE CONNECTION
    // You cannot send two responses
});







app.listen(4000, function(erro){
  if(erro){
    console.log("Something's wrong");
  }
  else{
    console.log("Server up")
  }
})