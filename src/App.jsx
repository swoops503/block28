import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div id="container">
            <Routes>
     <Route path="/blue" element={<h1>Blue</h1>} />
     <Route path="/red" element={<h1>Red</h1>} />
   </Routes>
      <div id="navbar">{/* navigation here */}</div>
      <div id="main-section">{/* routes here */}</div>
    </div>
    </>
  )
}

export default App
