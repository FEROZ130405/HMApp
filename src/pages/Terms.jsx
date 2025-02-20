import React from 'react';

const Terms = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 120px)',
      padding: '2rem',
      backgroundColor: '#f8fafc',
    },
    content: {
      maxWidth: '800px',
      width: '100%',
      textAlign: 'center',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
      color: '#1a1a1a',
      fontWeight: '600',
    },
    text: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#64748b',
      marginBottom: '1rem',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Terms of Service</h1>
        <p style={styles.text}>This is a dummy Terms of Service page.</p>
        <p style={styles.text}>Please add your actual terms of service content here.</p>
      </div>
    </div>
  );
};

export default Terms;
