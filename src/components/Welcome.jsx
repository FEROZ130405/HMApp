import React from 'react';

const Welcome = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 120px)', // Adjusted to properly center content
      textAlign: 'center',
      padding: '1rem',
      marginTop: '0', // Removed unnecessary margin
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '0.8rem',
    },
    paragraph: {
      fontSize: '1rem',
      maxWidth: '600px',
      lineHeight: '1.5',
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
