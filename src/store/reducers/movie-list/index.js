const initialState = {
  cart: [],
  movies: [],
  isLoading: false,
};

function movieListReducer(state = initialState, action) {
  switch (action?.type) {
    case "UPDATE_DATA": {
      return { ...state, movies: action?.value };
    }
    case "UPDATE_LOADER": {
      return { ...state, isLoading: action?.value };
    }
    case "UPDATE_CART": {
    }
    case "UPDATE_ERROR": {
      return { ...state, error: action?.value };
    }
    default:
      return state;
  }
  return state;
}

export default movieListReducer;
