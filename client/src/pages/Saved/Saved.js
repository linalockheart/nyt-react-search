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
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";


class Saved extends Component {
    state = {
        articles: [] //do i need to add more here?
    };

componentDidMount() {
    this.loadArticles();
  };

  //getSavedArticles function
  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ 
          articles: res.data, 
        })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

render() {
  return (

<div>
<Wrapper>
<Container fluid>
  <Row>
  <Col size="md-12">
    <Jumbotron>
        <h1>Saved Articles</h1>
    </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(articles => (
                  <ListItem key={articles._id}>
                    <Link to={"/articles/" + articles._id}>
                      <strong>
                        {articles.title} by {articles.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteArticle(articles._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          </Row>
  </Container>
  </Wrapper>
  </div>
  )

}
}

export default Saved;