import React from 'react';

class PrintData extends React.Component 
{

  render()
  {

    const FLEX={
      backgroundColor:"rgb(94, 183, 255)",
      color:"white",
      display:"flex",
      flexDirection:"colum",
      width:1000,
      height:450,
      marginLeft:160
     
    }

    const CARD1={
      backgroundColor:"#eee",
      color: "rgb(90,88,90)",
      height:350,
      width:400,
      padding:30,
      marginTop:20,
      marginLeft:20,
      borderRadius:5,
        
    }

    const CARD2={
      backgroundColor:"#eee",
      height:350,
      width:400,
      padding:30,
      margin:20,
      borderRadius:5,
      color: "rgb(90,88,90)",
      fontSize:10,
      letterSpacing:3,
      fontFamily:"Arial Black",
      lineHeight:2,
 
    }

  
    let Temperature=Math.floor(this.props.data.temp-273.15);
    let MaxTemp=Math.floor(this.props.data.maxTemp-273.15);
    let MinTemp=Math.floor(this.props.data.minTemp-273.15);
    
    {
    return(
      <div style={{display:this.props.data.city ? "block" : "none"}}>
            <div style={{backgroundColor:"rgb(94, 183, 255)",}}>
                  <div style={FLEX}>
                      <div style={CARD1}> 
                          <h1 style={{fontSize:30,  fontFamily:"Arial Black",}}>City : {this.props.data.city}</h1>
                          <h1 style={{  fontSize:100, letterSpacing:5,fontFamily:"fantasy",marginLeft:85  }}>{Temperature} &deg;C </h1>
                      </div>
                      <div style={CARD2}>
                              
                                <h1>Weather : {this.props.data.weather}</h1>
                                <h1>Wind : {this.props.data.windspeed} Km/hr</h1> 
                              
                                <h1>Max Temp : {MaxTemp} &deg;C</h1>
                                <h1>Min Temp : {MinTemp} &deg;C</h1>

                                <h1>Humidity : {this.props.data.humidity} %</h1>
                                <h1>Pressure :{this.props.data.pressure} Pa</h1>
                              
                      </div>
                  </div>
            </div>
      </div>
     )
    }
   
}
 

    
}
export default PrintData