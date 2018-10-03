import axios from "axios";

export default {

  // searchArticles: function(query) {
  //   return axios.get("/api/nyt")
  //       .then(res => axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {params: { "api-key": res.data.apiKey, "q": query}}))
  //       .catch(err => console.log(err));
  // },

  getArticles: function() {
    return axios.get("/api/nyt");
  },

  // Gets all articles
  // getArticles: function(y) {
  //   return axios.get("/api/articles");
  // },
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