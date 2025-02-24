import React, { useState } from 'react';
import api from '../services/api';

const AppointmentForm = ({ onSubmit, onCancel }) => {
  const [appointment, setAppointment] = useState({
    date: '',
    time: '',
    description: '',
    type: 'general',
  });
  const [error, setError] = useState('');

  const styles = {
    form: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    field: {
      marginBottom: '1rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#4a5568',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #e2e8f0',
    },
    select: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #e2e8f0',
      backgroundColor: '#ffffff',
    },
    button: {
      padding: '0.75rem 1.5rem',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      marginRight: '1rem',
    },
    submitButton: {
      backgroundColor: '#4a90e2',
      color: 'white',
    },
    cancelButton: {
      backgroundColor: '#cbd5e0',
      color: '#2d3748',
    },
    error: {
      color: '#ef4444',
      marginBottom: '1rem',
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/appointments', appointment);
      onSubmit(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create appointment');
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      {error && <div style={styles.error}>{error}</div>}
      
      <div style={styles.field}>
        <label style={styles.label}>Date</label>
        <input
          type="date"
          style={styles.input}
          value={appointment.date}
          onChange={(e) => setAppointment({...appointment, date: e.target.value})}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Time</label>
        <input
          type="time"
          style={styles.input}
          value={appointment.time}
          onChange={(e) => setAppointment({...appointment, time: e.target.value})}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Type</label>
        <select
          style={styles.select}
          value={appointment.type}
          onChange={(e) => setAppointment({...appointment, type: e.target.value})}
          required
        >
          <option value="general">General Checkup</option>
          <option value="specialist">Specialist Consultation</option>
          <option value="followup">Follow-up</option>
        </select>
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Description</label>
        <textarea
          style={styles.input}
          value={appointment.description}
          onChange={(e) => setAppointment({...appointment, description: e.target.value})}
          rows="4"
          required
        />
      </div>

      <div>
        <button type="submit" style={{...styles.button, ...styles.submitButton}}>
          Schedule Appointment
        </button>
        <button
          type="button"
          style={{...styles.button, ...styles.cancelButton}}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;
