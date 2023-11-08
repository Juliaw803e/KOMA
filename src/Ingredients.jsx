import react from "react"; 
import { useState } from "react";
//import {useParams, BrowserRouter, Link, Outlet, Routes, Route} from "react-router-dom"


//data=countryobject as a prop, invariabel
const Ingredients = ({props, key}) => {

//Som en array av frågorna: 
const[currentQuestion, setCurrentQuestion] = useState(0); 

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

//där cca3 ska vara den ingrediensen som man är på 

const currentQuestionData = question[currentQuestion];

return (
     
     <div>
        <h1>{currentQuestionData.text}</h1>
        
 
    </div>


);
     
    
};


export default Ingredients

/*<div className="options">
            {question.options.map((option) => (
                <div 
                key = {option.id}
                className={`option ${selectedOption === option.id ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option.id)}
                >
                </div>
            ))}
        </div>*/