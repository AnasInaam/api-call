import { useState } from 'react';
import ApiForm from '../components/ApiForm';

const Home = () => {
  const [result, setResult] = useState(null);

  const handleApiResponse = (data) => {
    setResult(data);
  };

  return (
    <div>
      <h1>Welcome to My Fullstack App</h1>
      <ApiForm onApiResponse={handleApiResponse} />
      {result && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;