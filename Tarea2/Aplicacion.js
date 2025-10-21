const express = require("express");
const app = express();
const puerto = 8080;
const url = require("url");

app.use(express.static('public'));

app.get("/Accion",(request,response)=>
{
  const q = url.parse(request.url, true).query;
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Cache-Control','no-cache');

  const result = {
    success: true,
    received: q
  };

  console.log('/Accion called with', q);
  response.json(result);
});

app.listen(puerto,()=>{console.log(puerto);});