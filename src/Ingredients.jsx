import react from "react"; 
import { useState } from "react";
//import {useParams, BrowserRouter, Link, Outlet, Routes, Route} from "react-router-dom"
import './App.css';

const Ingredients = ({
    ingredientResponses,
    setIngredientResponses,
  }) => {
    const [currentIngredient, setCurrentIngredient] = useState(0);
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
            { id: 3, image: 'imageOne.jpg', isCorrect: false },
            { id: 4, image: 'imageOne.jpg', isCorrect: false },
            { id: 5, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
    {
        text: "Välj hur mycket smör",
        options: [
            { id: 6, image: 'imageOne.jpg', isCorrect: false },
            { id: 7, image: 'imageOne.jpg', isCorrect: false },
            { id: 8, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
    {
        text: "Välj hur många ägg",
        options: [
            { id: 9, image: 'imageOne.jpg', isCorrect: false },
            { id: 10, image: 'imageOne.jpg', isCorrect: false },
            { id: 11, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
    {
        text: "Välj hur mycket chokladknappar",
        options: [
            { id: 12, image: 'imageOne.jpg', isCorrect: false },
            { id: 13, image: 'imageOne.jpg', isCorrect: false },
            { id: 14, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
    {
        text: "Välj hur lång tid i ugnen",
        options: [
            { id: 15, image: 'imageOne.jpg', isCorrect: false },
            { id: 16, image: 'imageOne.jpg', isCorrect: false },
            { id: 17, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
]
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

      <button
        onClick={() => {
            if (currentIngredient > 0) {
              setCurrentIngredient(currentIngredient - 1); //man jämför de olika arraysen om det finns mer sidor att komma till 
            } else {
            // else???
        }}}
        >{'\u2190'}
        Back
        </button>
     

      <button
        onClick={() => {
          if (currentIngredient < question.length - 1) { //man jämför de olika arraysen om det finns mer sidor att komma till 
            setCurrentIngredient(currentIngredient + 1);
          } else {
            navigate('/result');
          }
        }}
      >
      Next{'→'}
      </button>
    </div>
  );
};

export default Ingredients;