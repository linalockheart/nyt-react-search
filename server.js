const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

//don't need both of these. shoudl they live in a different file?
const request = require("request");
const axios = require("axios"); // 

//need to make the dotenv file
require("dotenv").config();

//Do i want to use these here? Should I put them in conroller instead?
var ObjectId = require("mongoose").Types.ObjectId;
var request = require("request");
const db = require("./models");
////////////////////////////////////////////////////////////////////

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes); //do I need this one here?
app.use(logger("dev"));

// MongoDB Configuration configuration (Change this URL to your own DB)
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, function(err){
  if (err) {
    console.log(err);
  }
  else {
    console.log("connected to mongoose");
  }
});

//Just a test to make sure the server is working
// app.get('/api/hello', (req, res) => {
//     res.send({ express: 'Hello From Express' });
//   });

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});