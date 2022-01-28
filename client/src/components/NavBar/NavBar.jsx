import React from 'react';
import './NavBar.css';
import { SearchBar } from "../SearchBar/SearchBar";

export const NavBar = () => {

    return (
        <div>
           <div className='title'>
               <h1>Popcorn Time 👒</h1>
            </div> 
            <div className="content">
                <span className='forone'>Movies</span>
                <span className='forone'>Series</span>
                <span className='forone'>Anime</span>
                <span className='forone'>Favorites</span>
                <span className='forone'>Genre All🔽</span>
                <span className='forone'>Sort By Trending🔽</span>
                <SearchBar />
            </div>
        </div>
    );
};