import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Ingredients from './Ingredients';
import Result from './Result';

function Home() {
  return (
    <div className="FirstPage">
      <div className="logo">
      <img src="../images/logo.png" alt="logo" className="logo"/>
      </div>
      <div className="bubble">
    
      <div className="nacho2">
        <div className="bubble">
        <img src="../images/bubble.png" alt="bubble" className="bubble"/>
        </div>
      </div>
      <img src="../images/nacho1.png" alt="nacho1" className="nacho1"/>
      </div>
      <div className="bakaButton">
        <Link to="/ingredients" className="baka">BAKA</Link>
      </div>
    </div>
  );
}


function IngredientsFunction() {
  const [ingredientResponses, setIngredientResponses] = useState([]);

  return (
    <div>
      <a href="/"><h3> HOME</h3></a>
      <h1>Bild på den önskade kakan</h1>
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
      <a href="/"><h3> HOME</h3></a>
      
      <div className="Result">
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