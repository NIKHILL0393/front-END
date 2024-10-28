import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    let[counter,setCounter]=useState(10)

  //let counter =10

  const addValue=() =>{
    //console.log("value added",Math.random());
    // counter=counter + 1
    setCounter(counter+1)
    console.log("clicked",counter);
  }

  const decreaseValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Project with vite:{counter}</h1>

      <h3>Counter value:{counter}</h3>

      <button
      onClick={addValue}
      > Add the value {counter}</button>
      <br/>
      <button
      onClick={decreaseValue}
      >Decrease the value{counter}</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
