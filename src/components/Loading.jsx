import React from 'react';

const Loading = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(100vh - 120px)',
    },
    spinner: {
      width: '50px',
      height: '50px',
      border: '3px solid #f3f3f3',
      borderTop: '3px solid #4a90e2',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.spinner} />
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
