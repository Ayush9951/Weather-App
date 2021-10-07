import React from 'react'
import '../css/SearchForm.css'

function SearchForm(props) {
    return (
        <form className="search-form" onSubmit={props.getWeatherDetails}>
            <input className="enter-city-name" type="text" placeholder="Enter City Name..." required />
            <button className="search-button" type="submit">Search</button>
        </form>
    )
}

export default SearchForm
