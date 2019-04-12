import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import UnsplashContainer from "./containers/unsplashContainer";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UnsplashContainer
          seconds={this.props.seconds}
          apiKey={this.props.apiKey}
        />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
