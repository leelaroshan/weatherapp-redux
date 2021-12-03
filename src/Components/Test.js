
import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {setWeather} from '../actions/index'
import axios from 'axios';

export default function Test() {

    const weatherobj = useSelector(state => state.weather.weatherobj)

    const dispatch = useDispatch();

    console.log(weatherobj);

    const fetchWeather = async()=>{
        const response = await axios
        .get("http://api.weatherstack.com/current?access_key=62dab9574b49d46dbf6108a64a54ff65&query=patiala&units=f")
        .catch(err => console.log(err))
     
        dispatch(setWeather(response.data));
     
      }

      useEffect(()=>{
          fetchWeather()
      },[])

     

console.log(weatherobj);

 
const {location, current} = weatherobj;

// console.log(location);


//   const {name, country, region, localtime} = location;

//   const {temperature, wind_speed, humidity, feelslike, weather_descriptions} = current




    return (
        <div className="weather-div">
            <h3>Weather Test </h3>

          
           
                 { location.map(item =>( 
                 <div key={item.id}> 
                 <h2>Place: {item.name} </h2>
                <h3>country:{item.country}</h3>
                <h4>time: {item.localtime}</h4>   */}
              </div> 
               ))
             } 

              <div className="weather-details">
              { current.map(item =>( 
                  <div>

                  <h3>Temperature: {item.temperature}F</h3>
                  <h3>wind speed: {item.wind_speed}</h3>
                  <h3>Humidity: {item.humidity}</h3>
                  <h3>Feels Like: {item.feelslike}</h3>
                  {/* <p>weather description:{item.weather_descriptions[0]}</p> */}

                 </div>

                 ))
                }   

             </div>



             {/* <div>{objs}</div> */}

            
        </div>
    )
}
