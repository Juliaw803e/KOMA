import React from 'react';

function Result({ ingredientResponses }) {
  // Här kan du utvärdera ingredientResponses och bestämma om det blev rätt eller fel
  const isPerfect = /* Sätt ett villkor baserat på svaren */yes; 
  
  return (
    <div>
      <h1>Resultat</h1>
      {isPerfect ? (
        <p>Allt blev perfekt!</p>
      ) : (
        <p>Usch, det blev äckligt.</p>
      )}
    </div>
  );
}

export default Result;