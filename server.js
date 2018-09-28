const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
var ObjectId = require("mongoose").Types.ObjectId;
var request = require("request");
const db = require("./models");

const app = express();

const PORT = process.env.PORT || 3000; //should it be 3000 for React?

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

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

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});