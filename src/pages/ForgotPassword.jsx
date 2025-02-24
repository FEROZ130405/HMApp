import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1: email, 2: OTP, 3: new password
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(100vh - 120px)',
      padding: '1rem',
      backgroundColor: '#f8fafc',
    },
    formContainer: {
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

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      console.log('Sending forgot password request...');
      const response = await api.post('/api/auth/forgot-password', { email });
      console.log('Response:', response.data);
      setStep(2);
    } catch (error) {
      console.error('Forgot password error:', error);
      setError(
        error.response?.data?.message || 
        error.message || 
        'Failed to send OTP. Please try again.'
      );
    }
  };

  const handleOTPVerify = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/auth/verify-otp', { email, otp });
      setStep(3);
      setError('');
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid OTP');
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/auth/reset-password', {
        email,
        otp,
        newPassword
      });
      console.log('Password reset response:', response.data);
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      console.error('Password reset error:', error);
      setError(
        error.response?.data?.message || 
        error.response?.data?.error || 
        'Failed to reset password. Please try again.'
      );
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Password Reset</h1>
        {error && <div style={styles.error}>{error}</div>}

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOTPVerify}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Verify OTP
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordReset}>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
