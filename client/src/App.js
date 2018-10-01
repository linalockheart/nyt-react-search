import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Header";
// import Wrapper from "./components/Wrapper";
// import Search from "./components/Search";
// import Results from "./components/Results";
// import Saved from "./components/Saved";

import Home from "./pages/Home";
import Saved from "./pages/Saved";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import Wrapper from "./components/Wrapper";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Home} />
        {/* <Route exact path="/articles/:id" component={Detail} /> */}
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

// class App extends Component {
//   state = {
//       data: null
//     };
  
//     componentDidMount() {
//         // Call our fetch function below once the component mounts
//       this.callBackendAPI()
//         .then(res => this.setState({ data: res.express }))
//         .catch(err => console.log(err));
//     }
//       // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
//     callBackendAPI = async () => {
//       const response = await fetch('/express_backend');
//       const body = await response.json();
  
//       if (response.status !== 200) {
//         throw Error(body.message) 
//       }
//       return body;
//     };
  
//     render() {
//       return (
//         <div className="App">
//           <header className="App-header">
//             <h1 className="App-title">Welcome to React</h1>
//           </header>
//           // Render the newly fetched data inside of this.state.data 
//           <p className="App-intro">{this.state.data}</p>
//         </div>
//       );
//     }
//   }

export default App;

