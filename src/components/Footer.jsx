import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#f8fafc',
      padding: '2rem 1rem',
      marginTop: 'auto',
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '2rem',
    },
    section: {
      flex: '1',
      minWidth: '200px',
    },
    title: {
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '1rem',
    },
    link: {
      color: '#64748b',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '0.5rem',
    },
    copyright: {
      textAlign: 'center',
      marginTop: '2rem',
      color: '#64748b',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.section}>
          <h3 style={styles.title}>HealthCare</h3>
          <p>Your trusted healthcare partner</p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.title}>Quick Links</h3>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/signup" style={styles.link}>Sign Up</Link>
        </div>
        <div style={styles.section}>
          <h3 style={styles.title}>Legal</h3>
          <Link to="/terms" style={styles.link}>Terms of Service</Link>
          <Link to="/privacy" style={styles.link}>Privacy Policy</Link>
        </div>
      </div>
      <div style={styles.copyright}>
        © {new Date().getFullYear()} HealthCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;