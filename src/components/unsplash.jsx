import React from "react";

const imgStyle = {
  width: "auto",
  maxWidth: "100%",
  height: "auto"
};

const Unsplash = props => {
  function imagesUrl() {
    return <img style={imgStyle} alt="" src={props.url} />;
  }

  return <React.Fragment>{imagesUrl()}</React.Fragment>;
};

export default Unsplash;
