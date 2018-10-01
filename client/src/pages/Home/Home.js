// contains all of the JSX to be rendered on the homepage. 
// This component may contain other smaller components or JSX that renders plain HTML elements. 
// This component should be able to query the NYT API for articles. 
// It displays the results from the API search in a rendered list that displays the article title, 
// publication date, and allows the user to visit an article's url or save the article to the MongoDB.

import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Wrapper from "../../components/Wrapper"

class Home extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveArticle({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
    <div>
    <Wrapper>
    <Jumbotron>
        <h1>NYT React Search</h1>
    </Jumbotron>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Enter a topic to search (required)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      </Wrapper>
      </div>
    );
  }
}

export default Home;
