import './App.css';
import DividerDesktop from './images/pattern-divider-desktop.svg'
import DividerMobile from './images/pattern-divider-mobile.svg'
import IconDice from './images/icon-dice.svg'
import React, { useEffect, useState } from 'react'

function App() {

  const [ advices, setAdvices ] = useState([])

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => setAdvices(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className="App">
      <div className="advice">

        <div>
          <p>ADVICE #{advices?.slip?.id}</p>  
          <h1>{advices?.slip?.advice}</h1>
        </div>
        
        <img src={DividerDesktop} alt="#" id='divider-desktop'/>
        <img src={DividerMobile} alt="#" id='divider-mobile'/>
        <button onClick={getAdvice}><img src={IconDice} alt="#" /></button>
      </div>
    </div>
  );
}

export default App;
