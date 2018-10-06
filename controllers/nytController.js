//module exports find all with the API key, pass params, call to mongo, 


const axios = require("axios");
const db = require("../models");
require("dotenv").config();
// const bodyParser = require("body-parser");

module.exports = {

    findAll: function(req, res) {
        const BASEURL = "https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?";
        const APIKEY = "api-key=" + process.env.NYT_API_KEY + "&q=";
        const q = req.body.query;
        console.log(BASEURL + APIKEY + q);
    axios.get(BASEURL + APIKEY + q)
    .then(articles => {
        console.log("hello");
        res.json(articles.data.response.docs)
    })
    .catch(err => {
        console.log("in .catch of nytimes call");
        console.log(err)
        res.status(422).json(err)
    })
  }
};