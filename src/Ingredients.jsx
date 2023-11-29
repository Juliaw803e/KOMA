import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './App.css';

const Ingredients = ({
    ingredientResponses,
    setIngredientResponses,
  }) => {
    const [currentIngredient, setCurrentIngredient] = useState(0);
    const navigate = useNavigate(); // Initialize useNavigate

const barStyle = {
  width: parseInt(currentIngredient, 10) * 16 + '%', // Example width
  height: '30px', // Example height
  backgroundColor: '#B5C9A5', // Example background color
  transition: '2s',
  borderRadius: '20px'
  // Additional styles here
};

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
  
const ingredientsArray = ["mjöl", "socker", "smör", "ägg", "chokladknappar", "tid i ugnen"];

const handleNext = () => {
  if (currentIngredient < question.length - 1) {
    setCurrentIngredient(currentIngredient + 1);
  } else {
    const { allCorrect, incorrectQuestions } = checkResults();

    const incorrectIngredientsList = incorrectQuestions.map(index => ingredientsArray[index]);
    const resultMessage = allCorrect
      ? "Mums, din kaka blev perfekt!" //if allCorrect == true 
      : `Blä! Testa att ändra ${incorrectIngredientsList.join(', ')}`; //if allCorrect == false 

    navigate('/result', { state: { message: resultMessage } }); //skicka message i state. Message är resultmessage som kan ha två olika fall beroende på om allcorrect == true/false
  }
};


return (
  <div className="ingredientPages">
    <div>
      <div id="progressBar">
        <div id="myProgress">
          <div id="myBar" style={barStyle}>

          </div>
        </div>
      </div>

    <img src="../images/kaka.png"></img>

    <div className="question-text">{<h2>{question[currentIngredient].text}</h2> /* renderar texten med vilken ingrediens */}</div>
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
       <button className = "navigation-button-left" onClick={() => setCurrentIngredient(currentIngredient - 1)}>
         Back<img src="../images/pilv.png"></img>
      </button>
      )}

     <button className = "navigation-button-right" onClick={handleNext} disabled={ingredientResponses[currentIngredient] === undefined}>
      <img src="../images/pilh.png"></img> Next</button>
    </div>
    </div>
  );
};

export default Ingredients;