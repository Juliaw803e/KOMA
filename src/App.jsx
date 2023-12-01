import React, { useState } from 'react';
import Modal from './Modal';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Ingredients from './Ingredients';
import Result from './Result';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    console.log('Opening modal in Home component'); // Debugging statement
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);
  return (
    <div className="FirstPage">
      <div className="helpButton"> 
        <button onClick={handleOpenModal}>?</button>
      </div> 

      <div className="logo">
      <img src="../images/logo (3).png" alt="logo" className="logo"/>
      </div>
      <div className="nachoBubble">
    
      <div className="nacho2">
          <div className="bubble bubble-bottom-left" contentEditable>Välj ingredienter för att baka kakan som visas! </div>
      </div>  
      <img src="../images/nacho1.png" alt="nacho1" className="nacho1"/>
      </div>
      <div className="bakaButton">
        <Link to="/ingredients" className="baka">BAKA</Link>
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <p>Såhär spelar du! Välj rätt mängd av vardera ingrediens för att baka kakan som visas</p>
      </Modal>
    </div>
  );
}

function IngredientsFunction() {
  const [showModal, setShowModal] = useState(false);
  const [ingredientResponses, setIngredientResponses] = useState([]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <a className= "homeButton" href="/"><img src="../images/house.png"></img></a>

      <div className="helpButton"> 
        <button onClick={handleOpenModal}>?</button>
      </div>

      <h2 className="malkakatext"> Önskad kaka</h2>
      <img src="../images/kaka.png" alt="logo" className="kakaingred"/>

    
      <div className="ingredients">
        <Ingredients
          ingredientResponses={ingredientResponses}
          setIngredientResponses={setIngredientResponses}
        />
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <p>Help text for Ingredients</p>
      </Modal>
    </div>
  );
}
function ResultFunction() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div> 
      <div className="result">
        <div className="header"> 
          <div className="helpButton">
            <button onClick={handleOpenModal}>?</button>
          </div>
          <div className="homeButton">
            <a href="/"><img src="../images/house.png" alt="Home"/></a>
          </div>
        </div>

        {/* Here you would include the main content of your ResultFunction component */}
        <Result
          // Pass in any required props to the Result component
        />

        <Modal show={showModal} onClose={handleCloseModal}>
          <p>Help text specific to the Result page</p>
        </Modal>
      </div>
    </div>
  );
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