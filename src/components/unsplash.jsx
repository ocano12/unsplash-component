import React from "react";

const Unsplash = props => {
  function imagesUrl() {
    return <img alt="" src={props.url} />;
  }

  return <React.Fragment>{imagesUrl()}</React.Fragment>;
};

export default Unsplash;
