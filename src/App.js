import React, { Component } from "react";
import "./App.css";
import UnsplashContainer from "./containers/unsplashContainer";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UnsplashContainer seconds="3" tags="cats" />
      </Provider>
    );
  }
}

export default App;
