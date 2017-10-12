import React from 'react';
import './AppBody.css';
import SearchMovieForm from '../SearchMovieForm/SearchMovieForm';
import SearchResults from '../SearchResults/SearchResults';

const AppBody = () => (
    <div className="AppBody">
        <SearchMovieForm/>
        <SearchResults/>
    </div>
);

export default AppBody;