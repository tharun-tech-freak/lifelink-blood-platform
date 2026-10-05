import { useEffect, useState } from 'react';
import api from '../../api/axios';

function Home() {
  const [apiMessage, setApiMessage] = useState('Checking LifeLink API...');
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    const checkApi = async () => {
      try {
        const response = await api.get('/health');
        setApiMessage(response.data.message);
      } catch (error) {
        setApiError('Could not connect to the LifeLink API.');
      }
    };

    checkApi();
  }, []);

  return (
    <main>
      <h1>Welcome to LifeLink</h1>
      <p>Blood Donor Coordination and Community Support Platform</p>
      <p>
        LifeLink coordinates donors, requesters, and verified blood-bank
        partners. All data shown in this demo is for demonstration purposes.
      </p>

      <h2>API status</h2>
      {apiError ? <p>{apiError}</p> : <p>{apiMessage}</p>}
    </main>
  );
}

export default Home;