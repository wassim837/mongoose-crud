const express = require('express');
const database = require ('./database')
database._connect()
const app = express();
const port = 4500;


app.use(express.json())
app.use('/', require('./routes/persons'))
app.get('/',(req,res)=>res.send('hi mongoose'))
app.listen(port, function(){
  console.log('The server is running,'+' open your browser at http://localhost:%s',port);
});
