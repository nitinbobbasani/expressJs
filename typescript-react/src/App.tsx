// import React from 'react'
import Child from './components/Child'
import {useState} from 'react'
import './App.css'; // Relative path to your CSS file

const App = () => {

  const [count, setCount] = useState(0)

  const clickBtn = () => {
    setCount(count+1)
    console.log(count)
    console.log("Btn Clicked")
  }
  // function Counter() {
    // const [count, setCount] = useState(0);
  
    const incrementFn = () => {
      setCount(count + 1);
    };
  
    const decrementFn = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <h2>{count}</h2>
  
        <button onClick={incrementFn}>
          Increment
        </button>
  
        <button onClick={decrementFn}>
          Decrement
        </button>
      </div>
    );
  

  
}

export default App
