import React from 'react';

const Terms = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem 1rem',
      minHeight: 'calc(100vh - 120px)',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '2rem',
      color: '#1a1a1a',
    },
    section: {
      marginBottom: '2rem',
    },
    heading: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#2d3748',
    },
    text: {
      lineHeight: '1.6',
      color: '#4a5568',
      marginBottom: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Terms of Service</h1>
      
      <div style={styles.section}>
        <h2 style={styles.heading}>1. Acceptance of Terms</h2>
        <p style={styles.text}>
          By accessing and using this healthcare management system, you accept and agree to be bound by the terms and conditions outlined here.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>2. Use of Service</h2>
        <p style={styles.text}>
          This service is intended for managing healthcare-related information and appointments. Users must provide accurate and complete information.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>3. Privacy Policy</h2>
        <p style={styles.text}>
          Your use of the service is also governed by our Privacy Policy, which outlines how we collect and use your personal information.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>4. User Responsibilities</h2>
        <p style={styles.text}>
          Users are responsible for maintaining the confidentiality of their account information and for all activities under their account.
        </p>
      </div>
    </div>
  );
};

export default Terms;
