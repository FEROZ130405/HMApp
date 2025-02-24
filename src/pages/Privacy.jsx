import React from 'react';

const Privacy = () => {
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
      <h1 style={styles.title}>Privacy Policy</h1>
      
      <div style={styles.section}>
        <h2 style={styles.heading}>1. Information Collection</h2>
        <p style={styles.text}>
          We collect information that you provide directly to us, including personal and medical information necessary for healthcare management.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>2. Information Usage</h2>
        <p style={styles.text}>
          Your information is used to provide and improve our healthcare services, manage appointments, and communicate with you about your care.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>3. Data Protection</h2>
        <p style={styles.text}>
          We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>4. Your Rights</h2>
        <p style={styles.text}>
          You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
