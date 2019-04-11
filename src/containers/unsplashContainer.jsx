import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImages } from "../actions/imagesAction";
import Unsplash from "../components/unsplash";

class UnsplashContainer extends Component {
  componentDidMount() {
    this.props.fetchImages(this.props);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <React.Fragment>
        <Unsplash url={this.props.url} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  allImages: state.api.allImages,
  index: state.api.currentIndex,
  url: state.api.currentUrl
});

export default connect(
  mapStateToProps,
  { fetchImages }
)(UnsplashContainer);

//grab new array
//provide a repeat prop
//containers
//create app
//loading
//clearInterval
//proptypes
