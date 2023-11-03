import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import {useParams, BrowserRouter, Link, Outlet, Routes, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="FirstPage">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite +  sofia</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          BAKA {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
     </div> 
    </>
  )
}

/* Eventuell routing i kommentarer: 
function ingredients(){
  return(
    <h1>välj ingredients </h1> 
  )
}

function slutsida(){
  return(
    <h1>välj ingredients </h1> 
  )
}

function PageRoute(){
  return(
  <BrowserRouter>
    <Routes>
         <Route path="/" element={<App />}/>
         <Route path="/country/:cca3" element={<ingredients />}/>
         <Route path="/sista" element={slutsida/>/>
      </Routes>
  </BrowserRouter>

  )
}*/

export default App
