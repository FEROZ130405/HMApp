import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const styles = {
    hero: {
      textAlign: 'center',
      padding: '4rem 1rem',
      backgroundColor: '#f8fafc',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      color: '#1a1a1a',
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#64748b',
      marginBottom: '2rem',
    },
    button: {
      backgroundColor: '#4a90e2',
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '4px',
      textDecoration: 'none',
      display: 'inline-block',
    },
    features: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '4rem 1rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    feature: {
      textAlign: 'center',
      padding: '1.5rem',
    },
    featureTitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#1a1a1a',
    },
  };

  return (
    <div>
      <section style={styles.hero}>
        <h1 style={styles.title}>Welcome to HealthCare</h1>
        <p style={styles.subtitle}>Your trusted healthcare management platform</p>
        <Link to="/signup" style={styles.button}>Get Started</Link>
      </section>

      <section style={styles.features}>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Easy Appointments</h2>
          <p>Schedule and manage your appointments with ease</p>
        </div>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Medical Records</h2>
          <p>Access your medical history anytime, anywhere</p>
        </div>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Secure Platform</h2>
          <p>Your health information is safe with us</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
