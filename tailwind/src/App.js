import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Prince",
    age: 20
  }

  let newArr = [1,2,3]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="chaiaurcode" btnText="click me" />
    <Card username="prince" />

    </>
  );
 
}

export default App;
