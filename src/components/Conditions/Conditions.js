import React from 'react'
import classes from './Conditions.module.css'

//Conditons function component

const Conditions = (props) =>{

    return(

        <div className={classes.Wrapper}>
            {props.responseObj.cod === 200 ? 
            <div>
                <p><strong>{props.responseObj.name}</strong></p>
                <p>It is currently {props.responseObj.main.temp} degrees out with {props.responseObj.weather[0].description}</p>
            </div>
           :null 
           }
        </div>
    )
}
export default  Conditions;