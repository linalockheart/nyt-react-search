import axios from "axios";

export default {

  // Gets all articles
  getArticles: function(q, start_year, end_year) {
    return axios.get("/api/nyt");
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