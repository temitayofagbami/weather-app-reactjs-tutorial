import React, { useState } from 'react';
import { render } from '@testing-library/react';
import Conditions from '../Conditions/Conditions';

//Forcast function component

const Forecast = () => {

    let [responseObj, setResponseObj] = useState({});

    // getForcast function
   function GetForecast() {
      
      //useState -built in hook that allows function component to use state 
      //Using the useState hook inside a function component, you can create a piece of state without switching to class components.
       

      //fetch wather data
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle", {
	        "method": "GET",
	        "headers": {
		    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		    "x-rapidapi-key": "f9dece3b64msh25d7e283a34bd75p1f2839jsn6e84e85c3dc3"
	        }
        })
        .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
        .catch(err => {
	        console.log(err);
        });
      
    }

   return( 
   <div>
       <h2>Current Weather Forecast Conditions</h2>
       <div>
           <h3>What is weather like today</h3>
            <p>{JSON.stringify(responseObj)}</p>
            <button onClick = {GetForecast}>Click to get forecast</button>
            <Conditions
               responseObj={responseObj}
            />
       </div>
   </div>
  )
}
export default Forecast;