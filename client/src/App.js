import React, { Component } from 'react';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search";
import Results from "./components/Results";
import Saved from "./components/Saved";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Wrapper>
          <Search>
          </Search>
          <Results>
          </Results>
          <Saved>
          </Saved>
        </Wrapper>
      </div>
    );
  }
}

export default App;
