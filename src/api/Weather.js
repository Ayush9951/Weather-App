import React from 'react'
import Heading from '../components/Heading'
import SearchForm from '../components/SearchForm'
import WeatherDetails from '../components/WeatherDetails'

class Weather extends React.Component {

    constructor() {
        super()
        this.state = {
            cityName: "",
            temp: "",
            description: "",
            maxTemp: "",
            minTemp: "",
            pressure: "",
            humidity: "",
            windspeed: "",
            weatherIcon: "",
            sunrise: "",
            sunset: "",
            cityFound: false,
            cityNotFound: false,
            searching: false
        }
    }

    getWeatherDetails = (event) => {
        this.setState({
            searching: true
        })

        event.preventDefault()

        var city = event.target[0].value
        console.log(city)

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=18b279fbaebde4984559089aed3d2e2b`)
            .then(response => {
                if (response.status === 404) {
                    console.log(response.status)
                    this.setState({
                        cityFound: false,
                        cityNotFound: true,
                        searching: false
                    })
                } else {
                    this.setState({
                        cityFound: true,
                        cityNotFound: false,
                        searching: false
                    })
                    return response.json()
                }
            })
            .then(weatherData => {
                console.log(weatherData)
                if (this.state.cityFound === true) {
                    this.setState({
                        cityName: weatherData.name,
                        temp: weatherData.main.temp,
                        description: weatherData.weather[0].description,
                        maxTemp: weatherData.main.temp_max,
                        minTemp: weatherData.main.temp_min,
                        pressure: weatherData.main.pressure,
                        humidity: weatherData.main.humidity,
                        windspeed: weatherData.wind.speed,
                        weatherIcon: weatherData.weather[0].icon,
                        sunrise: weatherData.sys.sunrise,
                        sunset: weatherData.sys.sunset
                    })
                }
            })
    }

    render() {
        return (
            <>
                <Heading />
                <SearchForm getWeatherDetails={this.getWeatherDetails} />
                <WeatherDetails
                    searching={this.state.searching}
                    cityNotFound={this.state.cityNotFound}
                    cityName={this.state.cityName}
                    temp={this.state.temp}
                    description={this.state.description}
                    weatherIcon={"http://openweathermap.org/img/wn/" + this.state.weatherIcon + "@2x.png"}
                    max={this.state.maxTemp}
                    min={this.state.minTemp}
                    pressure={this.state.pressure}
                    humidity={this.state.humidity}
                    windspeed={this.state.windspeed}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                />
            </>
        )
    }
}

export default Weather
