// client/src/pages/public/DonorsList.jsx
import { useEffect, useState } from 'react';
import { donorApi } from '../../api/donorApi.js';

export default function DonorsList() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    donorApi
      .getAll()
      .then((res) => {
        // Backend returns: { success: true, data: [...] }
        setDonors(res.data?.data || []);
      })
      .catch((err) => {
        setError(err?.message || 'Failed to load donors');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ padding: '1rem' }}>Loading donors...</div>;
  }

  if (error) {
    return (
      <div style={{ padding: '1rem', color: '#b91c1c' }}>
        Error: {error}
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Donors</h1>

      {donors.length === 0 ? (
        <p>No donors found.</p>
      ) : (
        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
          {donors.map((d) => (
            <li key={d._id} style={{ marginBottom: '0.5rem' }}>
              <strong>{d.name}</strong> – {d.bloodGroup} – {d.city} (Age: {d.age})
              {d.isAvailable ? '' : ' (Currently unavailable)'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}