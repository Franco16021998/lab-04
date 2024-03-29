import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './Components/Statistics'
import Button from "./Components/Button";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [promedio, setPromedio] = useState(0)

  const BUENO = () => {
    setGood(good + 1);
    setPromedio(promedio+1)
  };
  const NEUTRAL = () => {
    setNeutral(neutral + 1);
    setPromedio(promedio+0)
  };
  const MALO = () => {
    setBad(bad + 1);
    setPromedio(promedio-1)
  };

  return (
    <div>
      <Button estado="good" boton={BUENO} />
      <Button estado="neutral" boton={NEUTRAL} />
      <Button estado="bad" boton={MALO} />
      <Statistics good={good} neutral={neutral} bad={bad} promedio={promedio} />

    </div>
  );
};

ReactDOM.render(<App />, 
  document.getElementById('root')
); 