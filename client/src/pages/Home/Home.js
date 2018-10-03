// contains all of the JSX to be rendered on the homepage. 
// This component may contain other smaller components or JSX that renders plain HTML elements. 
// This component should be able to query the NYT API for articles. 
// It displays the results from the API search in a rendered list that displays the article title, 
// publication date, and allows the user to visit an article's url or save the article to the MongoDB.

import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import Article from "../../components/Article";

class Home extends Component {
  state = {
    articles: [],
    q: ""
    // start_year: "",
    // end_year: "",
    // saved: "", should this be in the other file? idk.
    // message: "Search for Articles to Begin!" do i need this here? where is this even??
  };

//   componentDidMount() {
//     this.loadArticles();
//   };



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("handle input change");
    console.log(event.target); //this is showing correctly
    console.log(name);
    console.log(value);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handle form submit");
    console.log(this.state.q);
    this.setState({ q: this.state.q })
    this.loadArticles();
  };

  loadArticles = () => {
    console.log("load articles function in home.js");
    if (this.state.q) {
        API.getArticles(this.state.q)
        .then(res => 
            this.setState({ articles: res.data, q: "" })
        )
        .catch(err => console.log(err))
    }
  };

  handleArticleSave = id => {
      const article = this.state.articles.find(article => article._id)
      API.saveArticle(article).then(res => this.getArticles());
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
                value={this.state.q}
                onChange={this.handleInputChange}
                name="q"
                placeholder="Enter a topic to search (required)"
              />
            <Input
                onChange={this.handleInputChange}
                name="start_year"
                placeholder="Start Year (optional)"
                value={this.state.start_year}
              />
            <Input
                onChange={this.handleInputChange}
                name="end_year"
                placeholder="End Year (optional)"
                value={this.state.end_year}
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
            </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.articles.length ? (
                <List>
                  {this.state.articles.map(article => (
                    <ListItem>
                    <Article
                        key={article._id}
                        _id={article._id}
                        title={article.headline.main}
                        url={article.web_url}
                        date={article.pub_date}
                        handleClick={this.handleArticleSave}
                        buttonText="Save"
                    />
                    </ListItem>
                ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
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
