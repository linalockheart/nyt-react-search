// contains all of the JSX to be rendered on the homepage. 
// This component may contain other smaller components or JSX that renders plain HTML elements. 
// This component should be able to query the NYT API for articles. 
// It displays the results from the API search in a rendered list that displays the article title, 
// publication date, and allows the user to visit an article's url or save the article to the MongoDB.

import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";

class Home extends Component {
  state = {
    articles: [],
    q: "",
    start_year: "",
    end_year: "",
    message: "Search for Articles to Begin!" //do i need this here? where is this even??
  };

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    API.getArticles({
        q: this.state.q,
        start_year: this.state.start_year,
        end_year: this.state.end_year
    })
      .then(res =>
        this.setState({ 
            articles: res.data,
            message: !res.data.length
                ? "No articles found. Please try another search."
                : "" 
        })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getArticles();
    // if (this.state.title && this.state.author) {
    //   API.saveArticle({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadArticles())
    //     .catch(err => console.log(err));
    // }
  };

  handleArticleSave = id => {
      const article = this.state.articles.find(article => article._id)
      API.saveArticle(article).then(res => this.getArticles());
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };
//should this delete article be in saved instead????

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
    <div>
    <Wrapper>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
                <h1>NYT Article Search</h1>
            </Jumbotron>
            <form>
              <Input
                handleInputChange={this.handleInputChange}
                name="search"
                placeholder="Enter a topic to search (required)"
                q={this.state.q}
                start_year={this.state.start_year}
                end_year={this.state.end_year}
              />
            <Input
                handleInputChange={this.handleInputChange}
                name="startyear"
                placeholder="Start Year (optional)"
                start_year={this.state.start_year}
              />
            <Input
                handleInputChange={this.handleInputChange}
                name="endyear"
                placeholder="End Year (optional)"

                end_year={this.state.end_year}
              />
              <FormBtn
                handleFormSubmit={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
            </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Card>
              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map(article => (
                    <ListItem
                        key={article._id}
                        _id={article._id}
                        title={article.headline.main}
                        url={article.web_url}
                        date={article.pub_date}
                        handleClick={this.handleArticleSave}
                        buttonText="Save"
                    />
                ))}
                </List>
              ) : (
                <h2>{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </Wrapper>
    </div>
    );
  };
}

export default Home;
