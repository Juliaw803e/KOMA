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
<<<<<<< HEAD
  </div>  

<p>{message}</p>

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
    <img src="../images/kaka.png" alt="kaka" className="bad"/>
  </div>
)}

</div>
=======
  </div> 
>>>>>>> faab28e5761f42fe8315e21918f18ac70a9bacd5

{message === 'Mums, din kaka blev perfekt!' ? (

<div className = "nachoBubble2">
<<<<<<< HEAD
  <div className= "nacho2">
    <div class="bubble bubble-bottom-left" contenteditable>Muuums </div>
  </div>
    <img src="../images/nacho1.png" alt="nacho3" className="nacho3"/>
  <div>
    <button className= "bakaIgen" onClick={goToIngredientsPage}>Baka igen</button>
  </div>
</div>
=======
  <div class= "nacho2">
    <div class="bubble bubble-bottom-left" contenteditable> {message} </div>
  </div>
    <img src="../images/nacho1.png" alt="nacho1" className="nacho1"/>
    <button className="bakaIgen" onClick={goToIngredientsPage}> Baka en ny kaka</button>
    </div>
>>>>>>> faab28e5761f42fe8315e21918f18ac70a9bacd5
) : (
  <>
   <div className="nachoBubble2">
    <div className="nacho2">
<<<<<<< HEAD
      <div className="bubble bubble-bottom-left" contentEditable>Bläääää</div>
=======
      <div className="bubble bubble-bottom-left" contentEditable>
      {message}
      </div>
    </div>
    <img src="../images/nacho1.png" alt="nacho1" className="nacho1" />
>>>>>>> faab28e5761f42fe8315e21918f18ac70a9bacd5
    </div>
    <img src="../images/nacho1.png" alt="nacho3" className="nacho3" />
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