import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#333',
      color: 'white',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
    },
    navbarBrand: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    navbarLinks: {
      display: 'flex',
      gap: '1rem',
    },
    navbarLinksMobile: {
      display: isMobileMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '50px',
      left: '10px', // Align left near the hamburger
      backgroundColor: '#444',
      padding: '0.5rem',
      width: '150px', // Smaller width for a refined look
      borderRadius: '5px',
      boxShadow: '0px 2px 5px rgba(0,0,0,0.3)',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      padding: '0.5rem',
    },
    hamburger: {
      display: isMobile ? 'flex' : 'none',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
    },
    authLinks: {
      display: 'flex',
      gap: '1rem',
    },
  };

  return (
    <header style={styles.navbar}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {isMobile && (
          <div style={styles.hamburger} onClick={toggleMobileMenu}>
            <FaBars style={{ color: 'white', fontSize: '1.5rem' }} />
          </div>
        )}
        <div style={styles.navbarBrand}>HealthCareApp</div>
      </div>

      {!isMobile ? (
        <nav style={styles.navbarLinks}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/signup" style={styles.link}>Signup</a>
          <a href="/login" style={styles.link}>Login</a>
        </nav>
      ) : (
        <>
          <nav style={styles.authLinks}>
            <a href="/signup" style={styles.link}>Signup</a>
            <a href="/login" style={styles.link}>Login</a>
          </nav>
          {isMobileMenuOpen && (
            <nav style={styles.navbarLinksMobile}>
              <a href="/" style={styles.link}>Home</a>
            </nav>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
