import React from 'react';

const Signup = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 120px)', // Adjust based on header and footer height
      padding: '1rem',
    },
    formContainer: {
      backgroundColor: '#f5f5f5',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      margin: '0.5rem 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '0.5rem',
      margin: '1rem 0',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#333',
      color: 'white',
      cursor: 'pointer',
    },
    '@media (max-width: 768px)': {
      formContainer: {
        width: '90%',
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Signup</h2>
        <input type="text" placeholder="Name" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button style={styles.button}>Signup</button>
      </div>
    </div>
  );
};

export default Signup;
