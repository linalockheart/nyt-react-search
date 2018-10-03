//module exports find all with the API key, pass params, call to mongo, 


const axios = require("axios");
const db = require("../models");
require("dotenv").config();

module.exports = {

    findAll: function(req, res) {
        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        const APIKEY = "?api-key=" + process.env.NYT_API_KEY;
        console.log(APIKEY);
    axios.get(BASEURL + APIKEY + "&q=" + "sharks")
    .then(articles => res.json(articles))
    .catch(err => {
        console.log("in .catch of nytimes call");
        console.log(err)
        res.status(422).json(err)
    })
  }
};