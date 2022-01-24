import React, { useEffect, useState } from "react";
import { api_key } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import { Cards } from '../Cards/Cards';
import axios from 'axios';

export const GET_MOVIES = "GET_MOVIES";
export const Home = () => {

    const [movie, setMovie] = useState([]);

    const dispatch = useDispatch();


    const getMovies = () => async (dispatch) => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`
            );
            console.log("getmovies", data)
            setMovie(data.results);
            return dispatch({
                type: GET_MOVIES,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        dispatch(getMovies());
        console.log("daedaed", movie);
    }, [dispatch]);

    return (
        <div>
            <span className="pageTitle"> Películas </span>
            <div className="trending">

                {
                    movie ? movie.map((e) => {
                        return (
                            <Cards
                                key={e.id}
                                id={e.id}
                                poster={e.backdrop_path}
                                title={e.original_title || e.title}
                                critica={e.vote_average}
                                date={e.release_date}
                            />

                        )
                    }) : "No se han encontrado resultados..."
                }
            </div>
        </div>
    )
};
