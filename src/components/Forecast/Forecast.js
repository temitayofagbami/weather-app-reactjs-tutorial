import React, { useState } from 'react';
import { render } from '@testing-library/react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css'


//Forcast function component

const Forecast = () => {

     //useState -built in hook that allows function component to use state 
      //Using the useState hook inside a function component, you can create a piece of state without switching to class components.

     //user input 
    let [city, setCity] = useState(''); //user input for city
    let [unit, setUnit] = useState('imperial'); //user input for unit type

    const uriEncodedCity = encodeURIComponent(city); //encode city for uri

   //weather api fetch response
    let [responseObj, setResponseObj] = useState({}); 

    //error handling
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    // getForcast function
      function getForecast(e) {
        e.preventDefault();

        //check that user enters input for city
        if (city.length === 0) {
            return setError(true);
        }

        // Clear state in preparation for new data
        setError(false);
        setResponseObj({});
  
        setLoading(true); // data fetch initated

      //fetch weather data with query parameters unit and city from user inputs
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	        "method": "GET",
	        "headers": {
		    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		    "x-rapidapi-key": process.env.REACT_APP_API_KEY
	        }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }
            setResponseObj(response);
            setLoading(false); //data fetch completed
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.log(err.message);
        });
      
    }

   return( 
   <div>
       <h2>Current Weather Forecast Conditions</h2>
       <div>
           <h3>What is weather like today?</h3>
            <form onSubmit={getForecast}>
               <div> 
                   <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    className={classes.TextInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <label>
                    <input
                        type="radio"
                        name="units"
                        className={classes.Radio}
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        className= {classes.Radio}
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celsius
                </label>
                <button type="submit" className= {classes.Button}>Get Forecast</button>
            </form>
            <Conditions
               responseObj={responseObj}
               error={error}
               loading={loading}
            />
       </div>
   </div>
  )
}
export default Forecast;
