// Renders articles that are saved in the MongoDB and 
// allows the user to visit the article's url or delete it from the MongoDB. 
// This page may be made up of multiple smaller components or JSX that renders plain HTML elements.

// Deploy your application to Heroku once complete. 
// Feel free to use the Mern Example as a starting point. 
// You must use Create React App and current versions of React and React-Router-Dom for this assignment.

import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Saved extends Component {
    state = {
        articles: [] //do i need to add more here?
    };

componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, 
                        title: "", //do I need the rest of these?
                        date: "",
                        summary: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

//Need to add render() return with html components here

};

export default Saved;