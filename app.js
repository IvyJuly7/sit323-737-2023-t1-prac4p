const express= require("express");
const app = express();

app.get("/add/:n1/:n2", function(req,res){
    try
    {
        const n1 = parseFloat(req.params.n1);
        const n2 = parseFloat(req.params.n2);
    
    if (n1 === NaN || n2 === NaN) {
        console.log()
        throw new error("Parsing Error");
    }
    const result = n1 + n2;
    res.send(result.toString());
    } 
    catch(error) 
    { 
        console.error(error)
    }
});

app.get("/subtract/:n1/:n2", function(req,res){
  try
  {
      const n1 = parseFloat(req.params.n1);
      const n2 = parseFloat(req.params.n2);
  
  if (n1 === NaN || n2 === NaN) {
      console.log()
      throw new error("Parsing Error");
  }
  const result = n1 - n2;
  res.send(result.toString());
  } 
  catch(error) 
  { 
      console.error(error)
  }
});

app.get("/multiply/:n1/:n2", function(req,res){
  try
  {
      const n1 = parseFloat(req.params.n1);
      const n2 = parseFloat(req.params.n2);
  
  if (n1 === NaN || n2 === NaN) {
      console.log()
      throw new error("Parsing Error");
  }
  const result = n1 * n2;
  res.send(result.toString());
  } 
  catch(error) 
  { 
      console.error(error)
  }
});

app.get("/divide/:n1/:n2", function(req,res){
  try
  {
      const n1 = parseFloat(req.params.n1);
      const n2 = parseFloat(req.params.n2);
  
  if (n1 === NaN || n2 === NaN) {
      console.log()
      throw new error("Parsing Error");
  }
  const result = n1 / n2;
  res.send(result.toString());
  } 
  catch(error) 
  { 
      console.error(error)
  }
});

const port = 3040;
app.listen(port,()=> {
    console.log("hello i'm listening to port " + port);
})
//curl -X POST -H "Content-Type: application/json" -d '{"n1": 6, "n2": 2}' http://localhost:3040/add/6/2