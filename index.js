//standards required for NodeJS
const express = require("express");
const app = (module.exports = express());
// const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const favicon = require("serve-favicon");
const path = require("path");
//const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(cors());
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
//static index.html
app.use(express.static(__dirname + "/public"));
//listen
//(ES5) function(){}
//process.env.PORT is for Cloud 9 & Heroku cloud hosting
app.listen(process.env.PORT || 8080, process.env.IP, function() {
  console.log("omg Express Template 0.0.1 by TurtleWolfe.com");
});