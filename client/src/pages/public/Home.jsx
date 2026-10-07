import { useEffect, useState } from "react";

function Home() {
  const [apiMessage, setApiMessage] = useState(
    "Checking LifeLink API..."
  );
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }

        return response.json();
      })
      .then((data) => {
        setApiMessage(data.message);
      })
      .catch(() => {
        setApiError("Could not connect to the LifeLink API.");
      });
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