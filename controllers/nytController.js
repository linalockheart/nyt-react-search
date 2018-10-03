//module exports find all with the API key, pass params, call to mongo, 

const axios = require("axios");
const db = require("../models");
require("dotenv").config();

module.exports = {
    findAll: function(req, res) {
        const params = Object.assign(
            { api_key: "?api-key=" + process.env.NYT_API_KEY },
            req.query
        );
        axios
          .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {params})
          .then(response => {
            db.Article
              .find()
              .then(dbArticles =>
                response.data.response.docs.filter(articles => 
                  dbArticles.every(
                    dbArticle => dbArticle._id.toString() !== article._id
                  )
                )
              )
              .then(articles => res.json(articles))
              .catch(err => res.status(422).json(err));
          });
    }
};