// client/src/pages/public/RegisterDonor.jsx
import { useState } from 'react';
import { donorApi } from '../../api/donorApi.js';

const BLOOD_GROUPS = [
  'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
];

export default function RegisterDonor() {
  const [form, setForm] = useState({
    name: '',
    bloodGroup: 'O+',
    age: '',
    phone: '',
    city: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    setSubmitting(true);

    donorApi
      .create(form)
      .then(() => {
        setStatus({
          type: 'success',
          message: 'Donor registered successfully!',
        });
        setForm({
          name: '',
          bloodGroup: 'O+',
          age: '',
          phone: '',
          city: '',
        });
      })
      .catch((err) => {
        const msg =
          err?.response?.data?.message ||
          err?.message ||
          'Failed to register donor';
        setStatus({ type: 'error', message: msg });
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  return (
    <div style={{ padding: '1rem', maxWidth: '420px' }}>
      <h1>Register as Donor</h1>

      {status.message && (
        <div
          style={{
            marginBottom: '1rem',
            padding: '0.5rem 0.75rem',
            borderRadius: '4px',
            backgroundColor:
              status.type === 'success' ? '#dcfce7' : '#fee2e2',
            color: status.type === 'success' ? '#166534' : '#991b1b',
          }}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem' }}>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem' }}>Blood Group</label>
          <select
            name="bloodGroup"
            value={form.bloodGroup}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            {BLOOD_GROUPS.map((bg) => (
              <option key={bg} value={bg}>{bg}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem' }}>Age</label>
          <input
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            required
            min={18}
            max={65}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem' }}>Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem' }}>City</label>
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          style={{
            marginTop: '0.5rem',
            padding: '0.5rem',
            cursor: submitting ? 'not-allowed' : 'pointer',
          }}
        >
          {submitting ? 'Registering...' : 'Register Donor'}
        </button>
      </form>
    </div>
  );
}