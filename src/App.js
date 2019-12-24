import React, { Component } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <Header />

        <div className="container post-content">
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:id" component={Post} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
