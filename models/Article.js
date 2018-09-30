const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  date: { type: Date,
    default: Date.now //should this just be required instead of defaulting to now?
  },

  summary: { //called snippet in JSON object
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  }

});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;