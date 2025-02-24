import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSent, setIsSent] = useState(false);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(100vh - 120px)',
      padding: '1rem',
      backgroundColor: '#f8fafc',
    },
    form: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      width: '100%',
    },
    title: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#1a1a1a',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      marginBottom: '1rem',
      borderRadius: '4px',
      border: '1px solid #e2e8f0',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      backgroundColor: '#4a90e2',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    message: {
      color: '#10b981',
      marginTop: '1rem',
    },
    error: {
      color: '#ef4444',
      marginTop: '1rem',
    },
    link: {
      color: '#4a90e2',
      textDecoration: 'none',
      display: 'block',
      marginTop: '1rem',
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/auth/forgot-password', { email });
      setIsSent(true);
      setMessage('Password reset instructions have been sent to your email.');
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send reset instructions');
      setMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h2 style={styles.title}>Reset Password</h2>
        {!isSent ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" style={styles.button}>
              Send Reset Instructions
            </button>
          </form>
        ) : (
          <p style={styles.message}>{message}</p>
        )}
        {error && <p style={styles.error}>{error}</p>}
        <Link to="/login" style={styles.link}>
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
