import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const message = location.state?.message || 'No result to display';

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
      ))}
    </ul>
  </div>
)}
</div>
);

};

export default Result;