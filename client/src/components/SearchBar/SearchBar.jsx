import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../actions/actions';
import Link from 'react-router-dom';
import './SearchBar.css';


export const SearchBar = () => {

    const dispatch = useDispatch();
    const peli = useSelector(state => state.movies.movies);
    console.log("holaaaaa", peli);
    const [input, setInput] = useState("");
    const [filteredData, setFilteredData] = useState([])

    const handleFilter = (e) => {
        setInput(e.target.value)
        const filterMovies = peli.results.filter((t) => {
            let movies = t.title
            return movies?.toLowerCase().includes(e.target.value.toLowerCase());
        });
        console.log("title", filterMovies);
        if (e.target.value === "") {
            setFilteredData([])
        } else {
            setFilteredData(filterMovies);
        };
    };
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getMovies({ name: input }))
        setInput("")
        setFilteredData([])
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} className="search">

                <input value={input} className="input"
                    placeholder="Buscar por nombre..."
                    onChange={handleFilter} />
                {
                    filteredData.length ?
                        <div className="dataResult">
                            {
                                filteredData.map(e => {
                                    return (
                                        <Link to={`/detail/${e._id}`}>
                                        <a key={e.id} className="dataItem">
                                        <p>{e.title || e.name}</p>
                                        </a>
                                        </Link>
                                    )
                                })
                            }
                        </div> :
                        null
                }
                <button > Buscar </button>
            </form>
        </div>
    )
};