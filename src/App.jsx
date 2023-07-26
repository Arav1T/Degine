import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Degine from './components/degine'


function App() {
  const [count, setCount] = useState(1)
  const [con, setcon] = useState(false)
  const ShowHide=()=>{
    setCount(count+1)
  console.log(count)
  if(window.screen.width <= 414){
    if(count % 2 ===0 ) setcon(true)
    else{setcon(false)}
  }
  else if(window.screen.width >= 414){
    setcon(false)
   }
  // else setCount(false)
 }

  return (
    <>
      <div className='h-screen overflow-hidden  '>
      <Navbar ShowHide={ShowHide}/>
      <Degine check={con}/>
      </div>
    </>
  )
}

export default App
