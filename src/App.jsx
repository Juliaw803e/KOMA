import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Ingredients from './Ingredients';

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
      <h1>Välj ingredienser</h1>
      <div className="ingredients">
        <Ingredients
          ingredientResponses={ingredientResponses}
          setIngredientResponses={setIngredientResponses}
        />
      </div>
    </div>
  );
}

function Slutsida() {
  return <h1>Slutsida!!</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<IngredientsFunction />} />
        <Route path="/sista" element={<Slutsida />} />
      </Routes>
    </Router>
  );
}

export default App;