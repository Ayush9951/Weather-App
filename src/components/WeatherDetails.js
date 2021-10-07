import React from 'react'
import '../css/WeatherDetails.css'

function WeatherDetails(props) {
    if (props.searching) {
        return (
            <h3 className="searching">Searching City Name...</h3>
        )
    }
    if (props.cityNotFound) {
        return (
            <h3 className="city-not-found">City Name Not Found</h3>
        )
    }
    else if (props.cityName) {
        return (
            <>
                <div className="weather-details">
                    <div className="weather-details__box-1">
                        <h1 className="city-name">{props.cityName}</h1>
                        <h1 className="city-temp">{props.temp.toFixed(2) + '\u00B0'} C</h1>
                        <img className="weather-icon" src={props.weatherIcon} alt="weather icon" />
                    </div>
                    <div className="weather-details__box-2">
                        <div className="container">
                            <h3>Weather : {props.description}</h3>
                            <h3>Wind : {props.windspeed} km/h</h3>
                        </div>
                        <div className="container">
                            <h3>Humidity : {props.humidity} %</h3>
                            <h3>Pressure : {props.pressure} Pa</h3>
                        </div>
                        <div className="container">
                            <h3>Max Temp : {props.temp.toFixed(2) + '\u00B0'} C</h3>
                            <h3>Min Temp : {props.temp.toFixed(2) + '\u00B0'} C</h3>
                        </div>
                        <div className="container">
                            <h3>Sunrise : {new Date(props.sunrise * 1000).toLocaleTimeString()}</h3>
                            <h3>Sunset : {new Date(props.sunset * 1000).toLocaleTimeString()}</h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return null;
}

export default WeatherDetails
