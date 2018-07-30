const express = require('express');
const path = require('path');

var app = express();
var publicPath = path.join(__dirname,'../public');
var port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/',(req,res)=>{
    res.send('/index.html');
});

app.listen(port,()=>{
    console.log('Server is started');
});