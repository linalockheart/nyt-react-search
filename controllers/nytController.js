//require axios and models
//module exports find all with the API key, pass params, call to mongo, 

const axios = require("axios");
const db = require("../models");
require("dotenv").config();

module.exports = {
    findAll: function(req, res) {
        const params = Object.assign(
            { api_key: process.env.NYT_API_KEY },
            req.query
        );
        axios
          .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {params}
        })
}
