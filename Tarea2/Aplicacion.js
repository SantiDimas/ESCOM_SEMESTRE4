const express = require("express");
const app = express();
const puerto = 8080;
const url = require("url");

app.use(express.static('public'));

app.get("/Accion",(request,response)=>
{
  const q = url.parse(request.url, true).query;
  // Enable CORS for testing from other origins
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Cache-Control','no-cache');

  // Simple JSON response echoing query parameters
  const result = {
    success: true,
    received: q
  };

  console.log('/Accion called with', q);
  response.json(result);
});

app.listen(puerto,()=>{console.log(puerto);});