import React from 'react'
import '../css/SearchForm.css'

function SearchForm(props){
    return(
        <form className="search-form" onSubmit = {props.callWeatherAPI}>
            <input className="enter-city-name" type="text" placeholder="city name" required/>
            <input className="search-button" type="submit" value="Search"/>
        </form>
    )
}

export default SearchForm
