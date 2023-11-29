import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Ingredients from './Ingredients';
import Result from './Result';

function Home() {
  return (
    <div className="FirstPage">
      <div className="helpButton"> 
        <button onClick= {myFunction}>?</button>
      </div> 

      <div className="logo">
      <img src="../images/logo (3).png" alt="logo" className="logo"/>
      </div>
      <div className="nachoBubble">
    
      <div className="nacho2">
          <div class="bubble bubble-bottom-left" contenteditable>Välj ingredienter för att baka kakan som visas! </div>
      </div>
      <img src="../images/nacho1.png" alt="nacho1" className="nacho1"/>
      </div>
      <div className="bakaButton">
        <Link to="/ingredients" className="baka">BAKA</Link>
      </div>
    </div>
  );
}

function myFunction() {
  alert("Såhär spelar du! Välj rätt mängd av vardera ingrediens för att baka kakan som visas :)");
}

function IngredientsFunction() {
  const [ingredientResponses, setIngredientResponses] = useState([]);

  return (
    <div>
      <a className= "homeButton" href="/"><img src="../images/house.png"></img></a>

      <div className="helpButton"> 
      <button onClick= {myFunction}>?</button>
      </div> 

      <h2 className="målkakatext"> Önskad kaka</h2>
      <img src="../images/kaka.png" alt="logo" className="kakaingred"/>

    
      <div className="ingredients">
        <Ingredients
          ingredientResponses={ingredientResponses}
          setIngredientResponses={setIngredientResponses}
        />
      </div>
    </div>
  );
}

function ResultFunction(){

  return (
    <div> 
      
      <div className="result">
        <div className="header"> 
          <div className="helpButton">
            <button onClick= {myFunction}>?</button>
          </div>
          <div className="homeButton">
            <a href="/"><img src="../images/house.png"></img></a>
          </div>

        </div>

        <Result
        />

      </div>

    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<IngredientsFunction />} />
        <Route path="/result" element={<ResultFunction/>} />
      </Routes>
    </Router>
  );
}

export default App;