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
            { id: 1, image: 'imageOne.jpg', isCorrect: false },
            { id: 2, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
    {
        text: "Välj hur mycket socker",
        options: [
            { id: 0, image: 'imageOne.jpg', isCorrect: false },
            { id: 1, image: 'imageOne.jpg', isCorrect: false },
            { id: 2, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
    {
        text: "Välj hur mycket smör",
        options: [
            { id: 0, image: 'imageOne.jpg', isCorrect: false },
            { id: 1, image: 'imageOne.jpg', isCorrect: false },
            { id: 2, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
    {
        text: "Välj hur många ägg",
        options: [
            { id: 0, image: 'imageOne.jpg', isCorrect: false },
            { id: 1, image: 'imageOne.jpg', isCorrect: false },
            { id: 2, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
    {
        text: "Välj hur mycket chokladknappar",
        options: [
            { id: 0, image: 'imageOne.jpg', isCorrect: false },
            { id: 1, image: 'imageOne.jpg', isCorrect: false },
            { id: 2, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
    {
        text: "Välj hur lång tid i ugnen",
        options: [
            { id: 0, image: 'imageOne.jpg', isCorrect: false },
            { id: 1, image: 'imageOne.jpg', isCorrect: false },
            { id: 2, image: 'imageOne.jpg', isCorrect: false },
        ]
    },
]
return (
    <div>
      <h2>{question[currentIngredient].text}</h2>
      <ul>
        {question[currentIngredient].options.map((option) => (
          <li key={option.id}>
            <label>
              <input
                type="radio"
                value={option.id}
                checked={ingredientResponses[currentIngredient] === option.id}
                onChange={(e) => {
                  const newResponses = [...ingredientResponses];
                  newResponses[currentIngredient] = parseInt(e.target.value);
                  setIngredientResponses(newResponses);
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
              setCurrentIngredient(currentIngredient - 1);
            } else {
            // else???
        }}}
        >{'\u2190'}
        Back
        </button>
     

      <button
        onClick={() => {
          if (currentIngredient < question.length - 1) {
            setCurrentIngredient(currentIngredient + 1);
          } else {
            // Alla ingredienser har besvarats, gör något med svaren
            // Du kan till exempel spara svaren eller navigera till nästa sida.
          }
        }}
      >
      Next{'→'}
      </button>
    </div>
  );
};

export default Ingredients;