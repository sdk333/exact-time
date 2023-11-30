import React from "react";
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Weather({weather}) {

    const [weather1, setWeather1] = useState()
    const [location1, setLocation1] = useState()
    const [feeling1, setFeeling1] = useState()

    const [weather2, setWeather2] = useState()
    const [location2, setLocation2] = useState()
    const [feeling2, setFeeling2] = useState()

    const [weather3, setWeather3] = useState()
    const [location3, setLocation3] = useState()
    const [feeling3, setFeeling3] = useState()
    

    useEffect(() => {
      axios.get('https://api.openweathermap.org/data/2.5/weather?units=metric&lat=55.7522&lon=37.6156&appid=fbbe28cecb73eb98a2004070f1781f32&lang=ru').then((response) => {
        const temperature1 = response.data.main.temp
        const city1 = response.data.name
        const annotation1 = response.data.weather[0].description
        setWeather1(Math.round(temperature1) + '°')
        setLocation1(city1)
        setFeeling1(annotation1)
      })
      axios.get('https://api.openweathermap.org/data/2.5/weather?units=metric&lat=43.5992&lon=39.7257&appid=fbbe28cecb73eb98a2004070f1781f32&lang=ru').then((response) => {
        const temperature2 = response.data.main.temp
        const city2 = response.data.name
        const annotation2 = response.data.weather[0].description
        setWeather2(Math.round(temperature2) + '°')
        setLocation2(city2)
        setFeeling2(annotation2)
      })
      axios.get('https://api.openweathermap.org/data/2.5/weather?units=metric&lat=43.1056&lon=131.874&appid=fbbe28cecb73eb98a2004070f1781f32&lang=ru').then((response) => {
          const temperature3 = response.data.main.temp
          const city3 = response.data.name
          const annotation3 = response.data.weather[0].description
          setWeather3(Math.round(temperature3) + '°')
          setLocation3(city3)
          setFeeling3(annotation3)
        })
    }, [setWeather1, setLocation1, setFeeling1, setWeather2, setLocation2, setFeeling2, setWeather3, setLocation3, setFeeling3])
        
    return ( 
        <div className={weather}>
        <div className="Weather1">
            <h1>{location1}</h1>
            <h1>{weather1}, {feeling1}</h1>
        </div>
        <div className="Weather2">
            <h1>{location2}</h1>
            <h1>{weather2}, {feeling2}</h1>
        </div>
        <div className="Weather3">
            <h1>{location3}</h1>
            <h1>{weather3}, {feeling3}</h1>
        </div>
        </div>
     );
}

export default Weather;