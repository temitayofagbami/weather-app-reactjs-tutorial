import React from 'react'

//Conditons function component

const Conditions = (props) =>{

    return(

        <div>
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