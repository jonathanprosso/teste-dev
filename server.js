'use strict' 

const express = require('express');
const bodyParser = require('body-parser'); 
const dotenv = require('dotenv').config();

const crawlerRouter = require('./routes/crawlerRouter.js'); 

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT;

app.use("/", crawlerRouter);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});