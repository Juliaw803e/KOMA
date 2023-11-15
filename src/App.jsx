import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Ingredients from './Ingredients';
import Result from './Result';

function Home() {
  return (
    <div className="FirstPage">
      <h1>Cookie Crumble</h1>
      <div className="card"></div>
      <div>
        <Link to="/ingredients">BAKA</Link>
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
      
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<IngredientsFunction />} />
        <Route path="/result" element={<Result/>} />
      </Routes>
    </Router>
  );
}

export default App;