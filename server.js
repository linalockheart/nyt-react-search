const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//don't need both of these. need to decide and delete one. should this live in another file??
// const request = require("request");
// const axios = require("axios"); // 

// require("dotenv").config();

//Do i want to use these here? Should I put them in conroller instead? Or routes?
// const ObjectId = require("mongoose").Types.ObjectId;
// const db = require("./models");
////////////////////////////////////////////////////////////////////////////////

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.use(logger("dev"));

// MongoDB Configuration configuration (Change this URL to your own DB)
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

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

// create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});