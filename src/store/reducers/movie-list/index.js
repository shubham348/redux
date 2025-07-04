import {
  UPDATE_CART,
  UPDATE_DATA,
  UPDATE_ERROR,
  UPDATE_LOADER,
  REMOVE_CART,
} from "../../constants/movie-list/index";
const initialState = {
  cart: {},
  movies: [],
  isLoading: false,
};

function movieListReducer(state = initialState, action) {
  const { value } = action;
  switch (action?.type) {
    case UPDATE_DATA: {
      return { ...state, movies: value };
    }
    case UPDATE_LOADER: {
      return { ...state, isLoading: value };
    }
    case UPDATE_CART: {
      const key = value["href"];
      const existingItem = state.cart[key];

      return {
        ...state,
        cart: {
          ...state.cart,
          [key]: {
            count: existingItem ? existingItem.count + 1 : 1,
            value,
          },
        },
      };
    }
    case UPDATE_ERROR: {
      return { ...state, error: value };
    }
    case REMOVE_CART: {
      const newState = { ...state };
      const newCart = { ...newState.cart };
      delete newCart[value];

      newState.cart = { ...newCart };

      return newState;
    }

    default:
      return state;
  }
  return state;
}

export default movieListReducer;
