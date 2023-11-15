import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const message = location.state?.message || 'No result to display';

 //const ingredientsArray = ["mjöl", "socker", "smör", "ägg", "chokladknappar", "tid i ugnen"];

  return (
   

<div>
<h2>Result</h2>
<p>{message}</p>
{location.state?.incorrectQuestions && (
  <div>
    <h3>Incorrect Questions:</h3>
    <ul>
      {location.state.incorrectQuestions.map((index) => (
        <li key={index + 1}>{`Question ${index + 1}`}</li>
        // <li key={index}>{`${index + 1}: ${ingredientsArray[index]}`}
      ))}
    </ul>
  </div>
)}
</div>
);

};

export default Result;