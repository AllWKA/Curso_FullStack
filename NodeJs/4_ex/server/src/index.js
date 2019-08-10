const express = require('express')
var cors = require('cors');
var moment = require('moment');
var consign = require('consign')

var users = {};
var tweets = {};

const app = express()
app.use(express.json());
app.use(cors());



app.listen(3000)