const express = require("express");
const app = express();
const puerto = 8080;
const url = require("url");

app.use(express.static('public'));

app.get("/Accion",(request,response)=>
{
  const q = url.parse(request.url, true).query;
  console.log('/Accion called with', q);

  const parametros = new URLSearchParams(q).toString();
  response.redirect('/login.html' + (parametros ? ('?' + parametros) : ''));
});

app.listen(puerto,()=>{console.log(puerto);});