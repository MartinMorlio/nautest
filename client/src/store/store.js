import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { moviesReducers } from "../reducers/reducers"; //-> Reducers


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  movies:  moviesReducers
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);