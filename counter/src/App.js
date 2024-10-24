import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(15)


  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValues = () => {
    setCounter(counter - 1)
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      > Add value: {counter}
      </button>
      <br />
      <button
        onClick={removeValues}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
