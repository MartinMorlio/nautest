import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './SearchBar.css';

export const SearchBar = () => {

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

    return (
        <div>
            <form className="search">

                <input value={input} className="input"
                    placeholder="Buscar por nombre..."
                    onChange={handleFilter} />
                {
                    filteredData.length ?
                        <div className="dataResult">
                            {
                                filteredData.map(e => {
                                    return (
                                        <div key={e.id}>{e.title}</div>

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