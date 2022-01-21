import React from 'react';
import { Link } from 'react-router-dom';
import style from './landing.module.css';

export function LandingPage() {
    return (
        <div>
            <h1 className={style.title}> Bienvenid@ al mejor sitio de películas </h1>
            <Link to='/home'>
                <button className={style.button}><h3>💻 LIST@ PARA VER? 💻</h3></button>
            </Link>
        </div>
    )
};

export default LandingPage;