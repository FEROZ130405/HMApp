import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Footer = () => {
  const { user } = useAuth();
  
  const styles = {
    footer: {
      backgroundColor: '#f8fafc',
      padding: '2rem 1rem',
      marginTop: 'auto',
      position: 'relative',
      borderTop: '1px solid #e2e8f0',
      boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.05)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '5%',
        right: '5%',
        height: '1px',
        background: '#e2e8f0',
        borderRadius: '50%',
      }
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

  const quickLinks = user ? (
    // Links for authenticated users
    <>
      <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      <Link to="/profile" style={styles.link}>Profile</Link>
      <Link to="/prescriptions" style={styles.link}>Prescriptions</Link>
      <Link to="/reports" style={styles.link}>Reports</Link>
    </>
  ) : (
    // Links for non-authenticated users
    <>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/login" style={styles.link}>Login</Link>
      <Link to="/signup" style={styles.link}>Sign Up</Link>
    </>
  );

  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.section}>
          <h3 style={styles.title}>HealthCare</h3>
          <p>Your trusted healthcare partner</p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.title}>Quick Links</h3>
          {quickLinks}
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