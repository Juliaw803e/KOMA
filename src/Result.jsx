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

  const barStyle = {
    width: '100%', // Example width
    height: '30px', // Example height
    backgroundColor: '#04AA6D', // Example background color
    transition: '2s'
    // Additional styles here
  };

  return (
<div>
  <div id="progressBar">
    <div id="myProgress">
      <div id="myBar" style={barStyle}></div>
    </div>
  </div>  

<p>{message}</p>


{message === 'Mums, din kaka blev perfekt!' ? (

<div className = "nachoBubble2">
  <div class= "nacho2">
    <div class="bubble bubble-bottom-left" contenteditable> {message} </div>
  </div>
    <img src="../images/nacho1.png" alt="nacho1" className="nacho1"/>
</div>
) : (
  <>
   <div className="nachoBubble2">
    <div className="nacho2">
      <div className="bubble bubble-bottom-left" contentEditable>
      {message}
      </div>
    </div>
    <img src="../images/nacho1.png" alt="nacho1" className="nacho1" />
    </div>
    <div>
      <button className="bakaIgen" onClick={goToIngredientsPage}> Försök igen</button>
    </div>
</>
)}

</div>
);

};

export default Result;