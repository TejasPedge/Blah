import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar'
import AfterNav from './Components/AfterNav'
import Middle from './Components/Middle'

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <AfterNav/>
      <Middle/>

    </div>
  )
}

export default App
