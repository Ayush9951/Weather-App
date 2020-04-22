import React from 'react';
import PrintData from './PrintData';
class Form extends React.Component{

    constructor()
    {
        super()
        this.state={
            city:"",
            temp:"",
            windspeed:"",
            weather:"",
            maxTemp:"",
            minTemp:"",
            humidity:"",
            pressure:"",   
        }
        this.handleClick=this.handleClick.bind(this)       
    }

    handleClick(event)
    {
        
        event.preventDefault();
        const city=event.target[0].value;
        console.log(city);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2d5600b2da87a720ba249bf6746a7cf`)
            .then(response=>response.json())
            .then(data=>{

                    this.setState({
                        city:data.name,
                        temp:data.main.temp,
                        weather:data.weather[0].description,
                        windspeed:data.wind.speed,
                        maxTemp:data.main.temp_min,
                        minTemp:data.main.temp_max,
                        humidity:data.main.humidity,
                        pressure:data.main.pressure,
                              
                    })
                    console.log(data)
                    
                  })
    }


    render()
    {
        let FORM={
            backgroundColor:"rgb(94, 183, 255)",
            height:100,
            width:"max",
        }
        let INPUT={
            marginTop:40,
            marginLeft:410,
            height:30,
            width:400
        }
        let BUTTON={
            backgroundColor:"dodgerblue",
            color:"white",
            marginLeft:50,
            height:50,
            width:80,
            fontSize:20,
            borderRadius:5,
            border:"none",
            cursor:"pointer"
            
        }


        return(
            <div>
                 <form style={FORM} onSubmit={this.handleClick} >
                    <input style={INPUT} type="text" placeholder="city name"/>
                    <button style={BUTTON} >search</button>   
                </form>

                <PrintData
                    data={{

                        city:this.state.city,
                        weather:this.state.weather,
                        windspeed:this.state.windspeed,
                        temp:this.state.temp,
                        maxTemp:this.state.maxTemp,
                        minTemp:this.state.minTemp,
                        humidity:this.state.humidity,
                        pressure:this.state.pressure,
                   
                        }} 
                    
                />
                    
            </div>          
        )
    }
}

export default Form