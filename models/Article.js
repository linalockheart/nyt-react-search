const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  date: { 
    type: Date,
    default: Date.now
  },

  summary: { //called snippet in JSON object, might not need this here?
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  }

});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;