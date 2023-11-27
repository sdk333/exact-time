import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [actualTime, setTime] = useState((Math.floor((Date.now() / (1000 * 60 * 60)) % 24) > 21 ? Math.floor((Date.now() / (1000 * 60 * 60)) % 24) - 21 : Math.floor((Date.now() / (1000 * 60 * 60)) % 24) + 3)  + ":" + (Math.floor((Date.now() / 1000 / 60) % 60) < 10 ? "0" + Math.floor((Date.now() / 1000 / 60) % 60) : Math.floor((Date.now() / 1000 / 60) % 60)) + ":" + (Math.floor((Date.now() / 1000) % 60) < 10 ? "0" + Math.floor((Date.now() / 1000) % 60) : Math.floor((Date.now() / 1000) % 60)))
    const [style, setStyle] = useState("theme1")
    const [styleBack, setStyleBack] = useState("App1")


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
    
    const changeStyleBack1 = () => {
      setStyleBack('App1')
    }
    const changeStyleBack2 = () => {
      setStyleBack('App2')
    }
    const changeStyleBack3 = () => {
      setStyleBack('App3')
    }

    return (
      
      <div className={styleBack}>
        {/* {Math.floor((Date.now() / 1000) % 60) % 2 == 0 ? <h1 className='time'>{actualTime}</h1> : <h1 className='time1'>{actualTime}</h1>} */}
        <h1 className={style}>{actualTime}</h1>
        <button className='but1' onClick={() => {changeStyle1(); changeStyleBack1()}}>светлая тема</button>
        <button className='but2' onClick={() => {changeStyle2(); changeStyleBack2()}}>тёмная тема</button>
        <button className='but3' onClick={() => {changeStyle3(); changeStyleBack3()}}>ещё тема</button>
      </div>
    );
}

export default App;
