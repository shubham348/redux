import { createStore } from "redux";
import movieListReducer from "./reducers/movie-list";

export const store = createStore(movieListReducer);
