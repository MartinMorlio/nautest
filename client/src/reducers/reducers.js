import { GET_MOVIES } from "../actions/actions";

const initialState = {
    movies: []
  };
  
  export const moviesReducers = (state = initialState, action) => {
    switch (action.type) {
      case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      }

      default:
        return state;
    }
  };