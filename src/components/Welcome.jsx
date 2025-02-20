import React from 'react';

const Welcome = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '2rem',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    paragraph: {
      fontSize: '1rem',
      maxWidth: '600px',
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
