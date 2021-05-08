import React from 'react'
import '../css/WeatherDetails.css'

function WeatherDetails(props){

    if(props.cityName)
    {
        return(
            <div className="weather-details">

                <section className="top-section">
                    <div className="city-name"> <h1> {props.cityName} </h1> </div>
                    <div className="city-temp"> <h1> {Math.round(props.temp) + '\u00B0' } </h1></div>
                    <div className="city-weather-description"> <h1> {props.description} </h1></div>
                </section>

                <img src={props.weatherIcon} alt="weather icon"/>

                <section className="bottom-section">

                    <div className="bottom-section-1">
                        <div><h4>Max / Min</h4></div>
                        <div><h4>Pressure</h4></div>
                        <div><h4>Humidity</h4></div>
                        <div><h4>Wind</h4></div>
                    </div>

                    <div className="bottom-section-2">
                        <div><h4> {Math.round(props.max) +'\u00B0'} / {Math.round(props.min) +'\u00B0'} </h4></div>
                        <div><h4> {props.pressure} Bar </h4></div>
                        <div><h4> {props.humidity} % </h4></div>
                        <div><h4> {props.windspeed} km/h</h4></div>
                    </div>

                </section>

            </div>
        )
    }
    else
    {
        return(
            <div></div>
        )
    }  

}

export default WeatherDetails
