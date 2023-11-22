import { useLocation } from 'react-router-dom';
import React from 'react';
import './App.css';
import { useNavigate } from "react-router-dom"; 


const Result = () => {
  const location = useLocation();
  const message = location.state?.message || 'No result to display';

  const navigate = useNavigate(); // Initialize useNavigate inside the component

  const goToIngredientsPage = () => {
    navigate('/ingredients');
  };

  return (
<div>
<div id="progressBar">
    <div id="myProgress">
      <div id="myBar"></div>
    </div>
  </div>

<h2>Lägg in färdig kaka samt målkakan här</h2>
<p>{message}</p>

{message === 'Mums, din kaka blev perfekt!' ? (
        <div>
          <h5> rättsvarknapp som ska skcika till hem och göra ny kaka</h5>
          <button className="bakaEnTill" onClick={goToIngredientsPage}>Baka en ny kaka</button>
        </div>
      ) : (
        <div>
          <button className="bakaIgen" onClick={goToIngredientsPage}>Försök igen</button>
        </div>
      )}

</div>
);

};

export default Result;