import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const message = location.state?.message || 'No result to display';



  return (
   

<div>
<h2>Lägg in färdig kaka samt målkakan här</h2>
<p>{message}</p>
</div>
);

};

export default Result;