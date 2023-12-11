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
    backgroundColor: '#B5C9A5', // Example background color
    transition: '2s',
    borderRadius: '20px'
    // Additional styles here
  };

  return (
<div>
  <div id="progressBar">
    <div id="myProgress">
      <div id="myBar" style={barStyle}></div>
    </div>
</div>

<div className="containerText">
  <div>
    <h2 className="smalltext"> Önskad kaka</h2>
  </div>
  <div>
    <h2 className="smalltext"> Din kaka</h2></div>
</div>

<div className= "kakor">
  <div className="wantedKaka">
    <img src="../images/kaka.png" alt="logo" className="wanted"/>
  </div>

  {message === 'Mums, din kaka blev perfekt!' ? (
  <div className= "braKakan">
    <img src="../images/kaka.png" alt="kaka" className="bra"/>
  </div>
) : (
  <div className= "badKakan">
    <img src="../images/bränd kaka.png" alt="kaka" className="bad"/>
  </div>
)}

</div>

{message === 'Mums, din kaka blev perfekt!' ? (

<div className = "nachoBubble2">
  <div className="nacho2">
          <div class="bubble bubble-bottom-left" contentEditable><p className="message">{message}</p> </div>
      </div>
    <img src="../images/nacho1.png" alt="nacho3" className="nacho3"/>
  <div>
    <button className= "bakaIgen" onClick={goToIngredientsPage}>NY KAKA</button>
  </div>
</div>
) : (
  <>
   <div className="nachoBubble2">
    <div className="nacho2">
          <div class="bubble bubble-bottom-left"><p className="message">{message}</p></div>
      </div>
    <img src="../images/nacho-sad.png" alt="nacho3" className="nacho3" />
      </div>
      <div className="forsokIgen"> 
    <div>
      <button className="bakaIgen" onClick={goToIngredientsPage}> FÖRSÖK IGEN</button>
    </div>
    </div>
</>
)}

</div>
);

};

export default Result;