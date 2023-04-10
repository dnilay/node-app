'use strict';

const express = require('express');
const {response, request} = require("express");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const EMPLOYEES=[
  {
    "ID":1,
    "NAME":"John",
    "SALARY":20000
  },
  {
    "ID":2,
    "NAME":"Marry",
    "SALARY":20001
  },
]
// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:green;">Node App - version-3!!</h1> <br\>');

});
app.get('/hello', (req, res) => {
  res.send('<h1 style="color:green;">hello world</h1> <br\>');

});
app.get('/employees',(req,res)=>{
  res.send(EMPLOYEES);
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
