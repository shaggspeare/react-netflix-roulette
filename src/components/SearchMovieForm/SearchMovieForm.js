import React from 'react';
import './SearchMovieForm.css';

const SearchMovieForm = () => (
    <form className="SearchMovieForm">
        <h2 className="SearchMovieForm__title">Find your movie</h2>
        <input type="text" name="" id="" className="SearchMovieForm__query"/>
        <div className="SearchMovieForm-buttons-wrapper">
            <div className="SearchMovieForm-search-filter">
                <span className="SearchMovieForm-search-filter__search-by">Search by</span>
                <span className="SearchMovieForm-search-filter-switcher">
                    <input className="SearchMovieForm-search-filter-switcher__radio" type="radio" name="search-radio" id="title-radio" defaultChecked/>
                    <label className="SearchMovieForm-search-filter-switcher__label" htmlFor="title-radio">Title</label>
                    <input className="SearchMovieForm-search-filter-switcher__radio" type="radio" name="search-radio" id="director-radio"/>
                    <label className="SearchMovieForm-search-filter-switcher__label" htmlFor="director-radio">Director</label>
                </span>
            </div>
            <input type="submit" value="Search" className="SearchMovieForm__search-button"/>
        </div>
    </form>
);

export default SearchMovieForm;