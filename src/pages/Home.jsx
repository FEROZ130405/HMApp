import React from 'react';
import Welcome from '../components/Welcome';

const Home = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh', // Ensures content fills viewport
      padding: '0 1rem', // Added padding to avoid content touching screen edges
      overflowX: 'hidden',
    },
  };

  return (
    <div style={styles.container}>
      <Welcome />
    </div>
  );
};

export default Home;
