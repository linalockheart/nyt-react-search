import axios from "axios";

export default {

  // Gets all articles
  getArticles: function(queryObj) {
    return axios.post("/api/nyt", queryObj);
  },
  // Gets the article with the given id
  getSavedArticles: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};