import * as actionTypes from "./types";
import axios from "axios";

export const changeImage = () => {
  return {
    type: actionTypes.CHANGE_IMAGE
  };
};

export const getImage = () => {
  return {
    type: actionTypes.GET_IMAGE
  };
};

export const setImages = allImages => {
  return {
    type: actionTypes.SET_IMAGES,
    allImages
  };
};

export const fetchImages = props => dispatch => {
  dispatch({
    type: actionTypes.FETCH_IMAGES
  });

  axios
    .get(
      `https://api.unsplash.com/photos/random/?client_id=${
        process.env.REACT_APP_UNSPLASH_API_KEY
      }&count=30`
    )
    .then(allImages => {
      dispatch(setImages(allImages.data));
      dispatch(getImage());
      setInterval(() => {
        dispatch(changeImage());
        //     dispatch(getImage());
      }, props.seconds * 1000);
    });
};
