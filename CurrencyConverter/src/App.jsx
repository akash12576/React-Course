import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat ' style={{backgroundImage:`url(https://images.pexels.com/photos/12591344/pexels-photo-12591344.jpeg?_gl=1*eim2le*_ga*NjE3MzI0MDc5LjE3NzQ4NTc0Mzc.*_ga_8JE65Q40S6*czE3OTA1MjMyMzkkbzUkZzEkdDE3OTA1MjMzNjckajYkbDAkaDA.)`}}>

   </div>
  )
}

export default App
