import React, { Component } from "react";
import "./App.css";
import UnsplashContainer from "./containers/unsplashContainer";

class App extends Component {
  render() {
    return <UnsplashContainer seconds="3" tags="cats" />;
  }
}

export default App;
