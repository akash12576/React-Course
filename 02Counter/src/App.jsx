import { useState } from 'react'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(15)

  // let Counter = 15

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue = () => {
     const newcounter = Counter-1;
    setCounter(newcounter)
  }
  return (
    <>
     <h1>React Course With Akash {Counter}</h1>
     <h2>Counter value: {Counter} </h2>
     <button
     onClick={addValue}>Add value</button> {" "}
     <button
     onClick={removeValue}>remove value</button> {" "}
     <p>footer: {Counter}</p>
    </>
  )
}

export default App
