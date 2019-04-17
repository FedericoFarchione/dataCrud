'use strict'

const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const mongoose = require('./db');
const PORT = process.env.PORT || 3000



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({limit: '5mb'}));


//app.get('/', require('./api/user/user.route.js'));
app.post('/test', require('./api/user/user.route.js'));
app.put('/test', require('./api/user/user.route.js'));
app.get('/test/:par1', require('./api/user/user.route.js'));
app.delete('/test', require('./api/user/user.route.js'));


const server = app.listen(PORT, function(){
  console.log(chalk.yellow(`Server started:  http://localhost:${PORT}`));
});


module.exports = {
  app ,
  bodyParser
};
