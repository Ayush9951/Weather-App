import React from 'react';

let H1={

    backgroundColor:"rgb(94, 183, 255)",
    height:60,
    textAlign:"center",
    paddingTop:20,
    paddingBottom:30,
    color:"white",
    fontSize:60,
    letterSpacing:6,
    fontFamily:"fantasy",
    margin:0
  
}

function Header()
{
    return(
        <div>
        <h1 style={H1}>Weather App</h1>
   
        </div>
    )
}
export default Header