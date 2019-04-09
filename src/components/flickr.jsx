import React, { Component } from "react";
import axios from "axios";

class Flickr extends Component {
  state = {
    currentIndex: 0,
    photos: [],
    currentUrl: ""
  };

  componentDidMount() {
    axios
      .get(
        "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=" +
          process.env.REACT_APP_FLICKR_API_KEY +
          "&safe_search=1&format=json&nojsoncallback=1"
      )
      .then(res => {
        const photos = res.data.photos.photo;
        this.setState({ photos }, () => this.getImage(this.state.photos));
        this.timerId = setInterval(() => {
          this.changeImage();
        }, 10000);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  changeImage = () => {
    const nextIndex = this.state.currentIndex;
    //   const nextIndex = ++currentIndex % this.state.photos.length;
    this.setState({ currentIndex: nextIndex + 1 }, () =>
      this.getImage(this.state.photos)
    );
  };

  getImage = photos => {
    const currentPicture = photos[this.state.currentIndex];
    const { farm, server, id, secret } = currentPicture;
    const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    this.setState({ currentUrl: url });
  };

  render() {
    return (
      <React.Fragment>
        {<img key="" alt="" src={this.state.currentUrl} />}
      </React.Fragment>
    );
  }
}

//remove NSFW content
//image not found
//handle different sizes
//specific tags

export default Flickr;
