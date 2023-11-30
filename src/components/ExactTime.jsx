import React from "react";
import '../App.css';
import { useEffect, useState } from 'react';
import Weather from "./Weather";

function ExactTime() {

    const [actualTime, setTime] = useState((Math.floor((Date.now() / (1000 * 60 * 60)) % 24) > 21 ? Math.floor((Date.now() / (1000 * 60 * 60)) % 24) - 21 : Math.floor((Date.now() / (1000 * 60 * 60)) % 24) + 3)  + ":" + (Math.floor((Date.now() / 1000 / 60) % 60) < 10 ? "0" + Math.floor((Date.now() / 1000 / 60) % 60) : Math.floor((Date.now() / 1000 / 60) % 60)) + ":" + (Math.floor((Date.now() / 1000) % 60) < 10 ? "0" + Math.floor((Date.now() / 1000) % 60) : Math.floor((Date.now() / 1000) % 60)))
    const [style, setStyle] = useState("theme1")
    const [styleBack, setStyleBack] = useState("Variant1")
    const [butStyle1, setButStyle1] = useState('but1')
    const [butStyle2, setButStyle2] = useState('but2')
    const [butStyle3, setButStyle3] = useState('but3')
    const [butStyle4, setButStyle4] = useState('but4')
    // const [selectTheme, setSelectTheme] = useState('selectTheme1')
    const [weather, setWeather] = useState('WeatherOne')
    

    useEffect(() => {
      const interval = setInterval(() => {
        setTime((Math.floor((Date.now() / (1000 * 60 * 60)) % 24) > 21 ? Math.floor((Date.now() / (1000 * 60 * 60)) % 24) - 21 : Math.floor((Date.now() / (1000 * 60 * 60)) % 24) + 3)  + ":" + (Math.floor((Date.now() / 1000 / 60) % 60) < 10 ? "0" + Math.floor((Date.now() / 1000 / 60) % 60) : Math.floor((Date.now() / 1000 / 60) % 60)) + ":" + (Math.floor((Date.now() / 1000) % 60) < 10 ? "0" + Math.floor((Date.now() / 1000) % 60) : Math.floor((Date.now() / 1000) % 60)))
    }, 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);

    const changeStyle1 = () => {
      setStyle('theme1')
    }
    const changeStyle2 = () => {
      setStyle('theme2')
    }
    const changeStyle3 = () => {
      setStyle('theme3')
    }
    const changeStyle4 = () => {
      setStyle('theme4')
    }
    
    const changeStyleBack1 = () => {
      setStyleBack('Variant1')
    }
    const changeStyleBack2 = () => {
      setStyleBack('Variant2')
    }
    const changeStyleBack3 = () => {
      setStyleBack('Variant3')
    }
    const changeStyleBack4 = () => {
      setStyleBack('Variant4')
    }

    const changeButStyle1 = () => {
      setButStyle2('but2_1')
      setButStyle3('but3_1')
      setButStyle4('but4_1')
      // setSelectTheme('selectTheme1')
      setWeather('WeatherOne')
    }
    const changeButStyle2 = () => {
      setButStyle1('but1_2')
      setButStyle3('but3_2')
      setButStyle4('but4_2')
      // setSelectTheme('selectTheme1')
      setWeather('WeatherOne')
    }
    const changeButStyle3 = () => {
      setButStyle1('but1_3')
      setButStyle2('but2_3')
      setButStyle4('but4_3')
      // setSelectTheme('selectTheme1')
      setWeather('WeatherOne')
    }
    const changeButStyle4 = () => {
      setButStyle1('but1_4')
      setButStyle2('but2_4')
      setButStyle3('but3_4')
      // setSelectTheme('selectTheme2')
      setWeather('WeatherTwo')
    }

    return ( 
        <div className={styleBack}>
        <Weather weather={weather}/>
        {/* {Math.floor((Date.now() / 1000) % 60) % 2 == 0 ? <h1 className='time'>{actualTime}</h1> : <h1 className='time1'>{actualTime}</h1>} */}
        <h1 className={style}>{actualTime}</h1>
        {/* <div className="b"> */}
        {/* <h2 className={selectTheme}>Выберите тему</h2> */}
        <button className={butStyle1} onClick={() => {changeStyle1(); changeStyleBack1(); changeButStyle1()}}>Светлая тема</button>
        <button className={butStyle2} onClick={() => {changeStyle2(); changeStyleBack2(); changeButStyle2()}}>Тёмная тема</button>
        <button className={butStyle3} onClick={() => {changeStyle3(); changeStyleBack3(); changeButStyle3()}}>Зелёная тема</button>
        <button className={butStyle4} onClick={() => {changeStyle4(); changeStyleBack4(); changeButStyle4()}}>Розовая тема</button>
        {/* </div> */}
      </div>
     );
}

export default ExactTime;