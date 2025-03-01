import React from 'react';

const Welcome = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 120px)',
      textAlign: 'center',
      padding: '2rem',
      margin: '1rem',
      maxWidth: '800px',
      width: '100%',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
      color: '#1a1a1a',
      fontWeight: '600',
    },
    paragraph: {
      fontSize: '1.1rem',
      maxWidth: '600px',
      lineHeight: '1.6',
      color: '#64748b',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to HealthCareApp</h1>
      <p style={styles.paragraph}>
        Your health is our priority. Explore our services and get the best healthcare solutions tailored for you.
      </p>
    </div>
  );
};

export default Welcome;
