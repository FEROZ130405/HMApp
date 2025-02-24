import React, { useState, useEffect } from 'react';

const Notification = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile] = useState(window.innerWidth <= 768);

  const styles = {
    notification: {
      position: 'fixed',
      bottom: isMobile ? '20px' : '30px',
      right: isMobile ? '20px' : '30px',
      padding: '1rem',
      borderRadius: '4px',
      backgroundColor: type === 'error' ? '#fee2e2' : '#e0f2fe',
      color: type === 'error' ? '#dc2626' : '#0369a1',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      maxWidth: isMobile ? 'calc(100% - 40px)' : '300px',
      zIndex: 1000,
      animation: 'slideIn 0.3s ease-out',
    },
    closeButton: {
      background: 'none',
      border: 'none',
      position: 'absolute',
      right: '8px',
      top: '8px',
      cursor: 'pointer',
      color: 'inherit',
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div style={styles.notification}>
      {message}
      <button style={styles.closeButton} onClick={() => {
        setIsVisible(false);
        onClose?.();
      }}>×</button>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Notification;
