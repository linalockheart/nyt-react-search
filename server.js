const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
var ObjectId = require("mongoose").Types.ObjectId;
var request = require("request");
const db = require("./models");

const app = express();

const PORT = process.env.PORT || 3001;

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

//Just a test to make sure the server is working
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});