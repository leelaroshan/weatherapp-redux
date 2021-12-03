import React from 'react';

const initialState = {

    weatherobj: []
 
    // location: {
    //   "name": "Bielefeld",
    //   "country": "Germany",
    //   "region": "NRW",
    //   "lat": "50.327",
    //   "lon": "66.400",
    //   "timezone_id": "Europe/nrw",
    //   "localtime": "2021-12-03 14:29",
    //   "localtime_epoch": 1638541740,
    //   "utc_offset": "5.50"
    //   }
  

}



const weatherReducer = ( state= initialState, {type,payload})=> {
    switch(type){
        case 'SET_WEATHER':
        return {...state, weatherobj: payload };
        default :
        return state;
    }

}

export default weatherReducer;

