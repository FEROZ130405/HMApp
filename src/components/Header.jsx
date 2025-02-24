import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    header: {
      backgroundColor: '#ffffff',
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'relative',
      zIndex: 1000,
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#4a90e2',
      textDecoration: 'none',
    },
    menu: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    },
    link: {
      color: '#1a1a1a',
      textDecoration: 'none',
      padding: '0.5rem',
    },
    button: {
      backgroundColor: '#4a90e2',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    mobileMenu: {
      display: menuOpen ? 'flex' : 'none',
      position: 'absolute',
      top: '100%',
      left: '1rem',
      backgroundColor: '#f8f9fa',
      padding: '0.5rem',
      flexDirection: 'column',
      gap: '0.5rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      zIndex: 1000,
      width: '200px',
      borderRadius: '8px',
      marginTop: '0.5rem',
      border: '1px solid #e2e8f0',
    },
    menuButton: {
      display: isMobile ? 'block' : 'none',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    navLinks: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '1rem',
    },
    mobileLink: {
      color: '#1a1a1a',
      textDecoration: 'none',
      padding: '0.8rem 1rem',
      display: 'block',
      width: '100%',
      borderRadius: '4px',
      transition: 'background-color 0.2s ease',
      backgroundColor: '#ffffff',
      marginBottom: '0.25rem',
      '&:hover': {
        backgroundColor: '#f1f5f9',
      },
    },
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.leftSection}>
          {isMobile && (
            <button 
              style={styles.menuButton}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          )}
          <Link to="/" style={styles.logo}>
            HealthCare
          </Link>
        </div>

        <div style={styles.rightSection}>
          {!isMobile && user && (
            <div style={styles.navLinks}>
              <Link to="/dashboard" style={styles.link}>Dashboard</Link>
              <Link to="/profile" style={styles.link}>Profile</Link>
            </div>
          )}
          {user ? (
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          ) : (
            <>
              <Link to="/login" style={styles.link}>Login</Link>
              <Link to="/signup" style={styles.button}>Sign Up</Link>
            </>
          )}
        </div>
      </nav>

      {isMobile && menuOpen && user && (
        <div style={styles.mobileMenu}>
          <Link 
            to="/dashboard" 
            style={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link 
            to="/profile" 
            style={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
