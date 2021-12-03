
import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {setWeather} from '../actions/index'
import axios from 'axios';

export default function Weather() {

    const weatherobj = useSelector(state => state.weather.weatherobj)

    const dispatch = useDispatch();

    console.log(weatherobj);

    const fetchWeather = async()=>{
        const response = await axios
        .get("http://api.weatherstack.com/current?access_key=62dab9574b49d46dbf6108a64a54ff65&query=patiala&units=f")
        .catch(err => console.log(err))

        console.log(response)
     
        dispatch(setWeather(response.data));
     
      }

      useEffect(()=>{
          fetchWeather()
      },[])

     

console.log(weatherobj);

// iterating objects

// const isObject = function(val){
//     if(val === null){
//         return false;
//     }
//     return (typeof val === "object")
// }

// const objProps = function(obj){ 
//           for(let val in weatherobj)
//       {
//     if(isObject(weatherobj[val])){
//         for(let val2 in weatherobj[val]){
//          return (val2, weatherobj[val][val2])
//         }
       
//     }
//     else{
//         console.log(val, weatherobj[val])
//     }
//     }
//   }

//     objProps(weatherobj);


// const {location, current} = weatherobj;

// console.log(location);

   const {name, country, region, localtime} = weatherobj.location;

   const {temperature, wind_speed, humidity, feelslike, weather_descriptions} = weatherobj.current


//  const temp = Math.floor((temperature-32)*(5/9))
//  console.log(temp)




    return (
        <div className="weather-div">
            <h3>Weather API </h3>

                   <div> 
                 <h2>Place: {name} </h2>
                <h3>country:{country}</h3>
                <h4>time: {localtime}</h4> 
               </div> 
             
                 
               <div className="weather-details">
             
                  <h3>Temperature: {temperature}F</h3>
                  <h3>wind speed: {wind_speed}</h3>
                  <h3>Humidity: {humidity}</h3>
                  <h3>Feels Like: {feelslike}F</h3> 
                  </div>
                  
                  {/* 
                  
                  <p>weather description:{item.weather_descriptions[0]}</p> */}

                   {/* </div> */}

             

              



            

            
        </div>
    )
}
