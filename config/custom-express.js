var express = require('express');
var consign = require('consign'); 
var bodyParser = require('body-parser'); 
const dotenv = require('dotenv').config()


module.exports = function(){
  const app = express();
  app.use(bodyParser.json());

  // consign()
  //   .include('rotas')
  //   .into(app)
    

  return app;
}