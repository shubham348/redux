import {
  UPDATE_CART,
  UPDATE_DATA,
  UPDATE_ERROR,
  UPDATE_LOADER,
  REMOVE_CART,
} from "../../constants/movie-list/index";

export const updateData = (value) => {
  return {
    type: UPDATE_DATA,
    value,
  };
};

export const updateloader = (value) => {
  return {
    type: UPDATE_LOADER,
    value,
  };
};

export const updateError = (value) => {
  return {
    type: UPDATE_ERROR,
    value,
  };
};
export const addToCart = (value) => {
  return {
    type: UPDATE_CART,
    value,
  };
};
export const removeFromCart = (value) => {
  return {
    type: REMOVE_CART,
    value,
  };
};
