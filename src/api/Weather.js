import React from 'react'
import SearchForm from '../components/SearchForm'
import WeatherDetails from '../components/WeatherDetails'

class Weather extends React.Component{

    constructor(){
        super()
        this.state = {
             cityName : "",
                 temp : "",
          description : "",
              maxTemp : "",
              minTemp : "",
             pressure : "",
             humidity : "",
            windspeed : "",
          weatherIcon : "",
        }
    }

    weatherAPI = (event) => {

        event.preventDefault()

        var city = event.target[0].value
        console.log(city)

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=18b279fbaebde4984559089aed3d2e2b`)
         .then(response => response.json())
         .then(weatherData => {
             console.log(weatherData)
            
                this.setState({
                    cityName : weatherData.name,
                    temp : weatherData.main.temp,
                    description : weatherData.weather[0].description,
                    maxTemp : weatherData.main.temp_max,
                    minTemp : weatherData.main.temp_min,
                    pressure : weatherData.main.pressure,
                    humidity : weatherData.main.humidity,
                    windspeed : weatherData.wind.speed,
                    weatherIcon : weatherData.weather[0].icon
                })
            }
         )

    }

    render(){
      return (
        <div>
              <SearchForm callWeatherAPI = {this.weatherAPI}/>
              <WeatherDetails

                  cityName = {this.state.cityName}
                  temp = {this.state.temp}
                  description = {this.state.description}

                  weatherIcon = {"http://openweathermap.org/img/w/"+this.state.weatherIcon+".png"}

                  max = {this.state.maxTemp}
                  min = {this.state.minTemp}
                  pressure = {this.state.pressure}
                  humidity = {this.state.humidity}
                  windspeed = {this.state.windspeed}   
        
               />
            </div>
        )
      }

}

export default Weather
