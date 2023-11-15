import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './App.css';

const Ingredients = ({
    ingredientResponses,
    setIngredientResponses,
  }) => {
    const [currentIngredient, setCurrentIngredient] = useState(0);
    const navigate = useNavigate(); // Initialize useNavigate
const question = [
    {
        text: "Välj hur mycket mjöl",
        options: [
            { id: 0, image: 'imageOne.jpg', isCorrect: false },
            { id: 1, image: 'imageOne.jpg', isCorrect: true },
            { id: 2, image: 'imageOne.jpg', isCorrect: false },
        ]   
    },
    {
        text: "Välj hur mycket socker",
        options: [
            { id: 3, image: 'imageOne.jpg', isCorrect: true },
            { id: 4, image: 'imageOne.jpg', isCorrect: false },
            { id: 5, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
    {
        text: "Välj hur mycket smör",
        options: [
            { id: 6, image: 'imageOne.jpg', isCorrect: false },
            { id: 7, image: 'imageOne.jpg', isCorrect: true },
            { id: 8, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
    {
        text: "Välj hur många ägg",
        options: [
            { id: 9, image: 'imageOne.jpg', isCorrect: true },
            { id: 10, image: 'imageOne.jpg', isCorrect: false },
            { id: 11, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
    {
        text: "Välj hur mycket chokladknappar",
        options: [
            { id: 12, image: 'imageOne.jpg', isCorrect: false },
            { id: 13, image: 'imageOne.jpg', isCorrect: false },
            { id: 14, image: 'imageOne.jpg', isCorrect: true },
        ]
    },
    {
        text: "Välj hur lång tid i ugnen",
        options: [
            { id: 15, image: 'imageOne.jpg', isCorrect: true },
            { id: 16, image: 'imageOne.jpg', isCorrect: false },
            { id: 17, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
]

const checkResults = () => {
  // Check if all selected options are correct
  const incorrectQuestions = ingredientResponses.reduce((incorrectIndices, response, index) => {
    const correctOption = question[index].options.find(option => option.isCorrect);
    
    // Ensure that correctOption is defined and compare the response directly with correctOption.id
    if (correctOption && correctOption.id !== response) {
      incorrectIndices.push(index);
    }

    return incorrectIndices;
  }, []);

  return {
    allCorrect: incorrectQuestions.length === 0,
    incorrectQuestions,
  };
};
  
  const handleNext = () => {
    if (currentIngredient < question.length - 1) {
      setCurrentIngredient(currentIngredient + 1);
    } else {
      const { allCorrect, incorrectQuestions } = checkResults();
      const resultMessage = allCorrect
        ? "Tasty cookie!"
        : `Incorrect at question(s): ${incorrectQuestions.map(index => index + 1).join(', ')}`;
  
      navigate('/result', { state: { message: resultMessage } });
    }
  };

return (
    <div>
      {<h2>{question[currentIngredient].text}</h2> /* renderar texten med vilken ingrediens */}
      <ul>
        {question[currentIngredient].options.map((option) => ( // map function som renderar en lista med alternativ. key hjälper att rendera 
          <li key={option.id}>
            <label>
              <input
                type="radio" //radio button 
                value={option.id} //0,1,2 
                checked={ingredientResponses[currentIngredient] === option.id} //kollar om currentingredient i ingredientresponses array = id. Om de matchar så "check:as" (väljs) knappen
                onChange={(e) => { //onchange uppdaterar state med vad man valt. 
                  const newResponses = [...ingredientResponses]; //en kopia av ingredienrespons array skapas 
                  newResponses[currentIngredient] = parseInt(e.target.value);
                  setIngredientResponses(newResponses); //state uppdateras med setIngredientResponse 
                }}
              />
              <img src={option.image} alt={`Option ${option.id}`} />
            </label>
          </li>
        ))}
      </ul>

      {currentIngredient !== 0 && (
       <button onClick={() => setCurrentIngredient(currentIngredient - 1)}>
        {'\u2190'} Back
      </button>
      )}

     <button onClick={handleNext} disabled={ingredientResponses[currentIngredient] === undefined}>
      Next {'→'}
      </button>
    </div>
  );
};

export default Ingredients;