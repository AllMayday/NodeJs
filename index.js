const express = require("express"); 
const app = express();              

// It isn't enough toi just import Express. It is necessary to initialize it 
// in a variable so it may be used, as you'll see above

app.get("/",function(req,res){
    if(req.query["variavel"])
      {
        res.send("Query caught: "+req.query["variavel"]);
      }
      else
      {
        res.send("Response caught");
      }

    // Response is always necessary in a route, else the function
    // keeps reloading itself, never returning anything to user
    // .send ENDS THE CONNECTION
    // You cannot send two responses
});

app.get("/secondPage/:name",function(req,res){
  res.send("You've landed in the second page. Well done "+req.params.name+"!");
  
});


app.listen(4000, function(erro){
  if(erro){
    console.log("Something's wrong");
  }
  else{
    console.log("Server up")
  }
})