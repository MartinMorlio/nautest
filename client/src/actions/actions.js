import axios from 'axios';

const URL = "https://api.themoviedb.org/3/movie/550?api_key=d08d434e3a68c124e5ef6c3084e7eabf";

export const getMovies = async () => {
    const res = await axios.get(URL)
    console.log("getmovies", res);
    return res;
};

