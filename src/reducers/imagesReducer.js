//evaluate any action commited
import * as actionTypes from "../actions/types";

const initialState = {
  allImages: [],
  currentIndex: 0,
  currentUrl: ""
};

const changeImage = (state, action) => {
  const currentIndex = state.currentIndex;
  const nextIndex = currentIndex + 1;
  if (nextIndex === state.allImages.length) {
    return {
      ...state,
      currentIndex: 0
    };
  } else {
    return {
      ...state,
      currentIndex: nextIndex,
      currentUrl: state.allImages[nextIndex].urls.raw
    };
  }
};

const getImage = (state, action) => {
  const index = state.currentIndex;
  const image = state.allImages[index];
  const url = image.urls.small;
  return {
    ...state,
    currentUrl: url
  };
};

const setImages = (state, action) => {
  return {
    ...state,
    allImages: action.allImages
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_IMAGES:
      return {
        ...state
      };
    case actionTypes.SET_IMAGES:
      return setImages(state, action);
    case actionTypes.GET_IMAGE:
      return getImage(state, action);
    case actionTypes.CHANGE_IMAGE:
      return changeImage(state, action);
    default:
      return state;
  }
};

export default reducer;

//   this.setState({ currentIndex: nextIndex + 1 }, () => this.getImage(photos));
