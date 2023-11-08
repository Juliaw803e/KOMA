import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useParams, BrowserRouter as Router, Link, Outlet, Routes, Route} from "react-router-dom"
// IMPORTERA detta för att raden ovan ska funka: "npm install react-router-dom"
import Ingredients from './Ingredients'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="FirstPage">
      // Lägg till cookie crumble logga
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" /> 
      </div>
      <h1>Cookie Crumble</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          BAKA {count}
        </button>
      </div>

      <div>
          <Link to="/ingredients">Go to Ingredients</Link>
      </div>

     </div> 
    </>
  )
}

//Eventuell routing: 
//Baka knappen som ska in i return typ:
/*<div>
<Link to={"/ingredients"}> BAKA </Link>
</div>*/


function IngredientsFunction(){
  return(
    <h1>välj ingredients </h1>
    //Här ska man på något sätt koppla till componenten ingredients 
  )
}

function Slutsida(){
  return(
    <h1>Slutsida!! </h1> 
  )
}

function App(){
  return(
  <Router>
    <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/ingredients" element={<IngredientsFunction />}/>
         <Route path="/sista" element={<Slutsida/>}/>
      </Routes>
  </Router>

  )
}


export default App
