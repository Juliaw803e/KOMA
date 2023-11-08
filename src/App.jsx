import { useState } from 'react'
import './App.css'
import {useParams, BrowserRouter as Router, Link, Outlet, Routes, Route} from "react-router-dom"
// IMPORTERA detta för att raden ovan ska funka: "npm install react-router-dom"
import Ingredients from './Ingredients'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="FirstPage">
      <h1>Cookie Crumble</h1>
      <div className="card">
      </div>
      <div>
            <Link to="/ingredients">BAKA</Link>
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

 //Här ska man på något sätt koppla till componenten ingredients
function IngredientsFunction(){
  let arrayen = [1]; 

  return(
    <div>
    <h1>välj ingredienser </h1>
     
    <div className="ingredients">
    {arrayen.map((item, i) => (
      <Ingredients prop={item} key={i} />
    ))}
  </div>
  </div>
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
