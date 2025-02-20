import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [isMobile] = useState(window.innerWidth <= 768);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 120px)',
      padding: isMobile ? '1rem' : '2rem',
      backgroundColor: '#f8fafc',
    },
    formContainer: {
      backgroundColor: '#ffffff',
      padding: isMobile ? '1.5rem' : '2.5rem',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    title: {
      fontSize: isMobile ? '1.75rem' : '2rem',
      color: '#1a1a1a',
      marginBottom: '1.5rem',
      fontWeight: '600',
    },
    subtitle: {
      color: '#64748b',
      fontSize: '0.875rem',
      marginBottom: '1.5rem',
    },
    inputGroup: {
      position: 'relative',
      marginBottom: '1rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      marginBottom: '1rem',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      fontSize: '1rem',
      backgroundColor: '#f8fafc',
      transition: 'all 0.3s ease',
      outline: 'none',
      boxSizing: 'border-box',
      color: '#000000',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      marginTop: '1rem',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#4a90e2',
      color: 'white',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    backToLogin: {
      marginTop: '1.5rem',
      color: '#64748b',
      fontSize: '0.875rem',
    },
    backToLoginLink: {
      color: '#4a90e2',
      textDecoration: 'none',
      fontWeight: '500',
      marginLeft: '0.25rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Reset Password</h2>
        <p style={styles.subtitle}>Enter your email address to receive password reset instructions.</p>
        <div style={styles.inputGroup}>
          <input
            type="email"
            placeholder="Email address"
            style={styles.input}
          />
        </div>
        <button style={styles.button}>Send Reset Link</button>
        <p style={styles.backToLogin}>
          Remember your password?
          <Link to="/login" style={styles.backToLoginLink}>
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
