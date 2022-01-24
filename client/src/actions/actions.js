import axios from "axios";
export const api_key = "d08d434e3a68c124e5ef6c3084e7eabf";

export const GET_MOVIES = "GET_MOVIES";

export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`
    );
    console.log("getmovies", data);
    return dispatch({
      type: GET_MOVIES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
