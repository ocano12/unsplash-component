import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import UnsplashContainer from "./containers/unsplashContainer";
import store from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UnsplashContainer seconds="3" tags="cats" />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();

export default App;
