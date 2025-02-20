import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    footer: {
      backgroundColor: '#222',
      color: 'white',
      padding: '1.5rem',
      width: '100vw',
      maxWidth: '100%',
      marginTop: 'auto',
    },
    containerDesktop: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    containerMobile: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
    },
    column: {
      flex: '1',
      minWidth: '250px',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-start',
      gap: '12px',
      marginTop: '10px',
    },
    icon: {
      color: 'white',
      fontSize: '1.5rem',
    },
  };

  return (
    <footer style={styles.footer}>
      {!isMobile ? (
        // Desktop UI
        <div style={styles.containerDesktop}>
          <div style={styles.column}>
            <h4>About Us</h4>
            <p>We provide healthcare solutions to make your life better.</p>
          </div>
          <div style={styles.column}>
            <h4>Quick Links</h4>
            <nav>
              <a href="/home">Home</a>
              <a href="/services">Services</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
          <div style={styles.column}>
            <h4>Contact Us</h4>
            <p>Email: support@healthcare.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
          <div style={styles.column}>
            <h4>Follow Us</h4>
            <div style={styles.socialIcons}>
              <a href="#"><FaFacebook style={styles.icon} /></a>
              <a href="#"><FaTwitter style={styles.icon} /></a>
              <a href="#"><FaInstagram style={styles.icon} /></a>
              <a href="#"><FaLinkedin style={styles.icon} /></a>
            </div>
          </div>
        </div>
      ) : (
        // Mobile UI
        <div style={styles.containerMobile}>
          <h4>HealthCareApp</h4>
          <nav>
            <a href="/home">Home</a> | 
            <a href="/services">Services</a> | 
            <a href="/contact">Contact</a>
          </nav>
          <div>
            <p>Email: support@healthcare.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
          <div style={styles.socialIcons}>
            <a href="#"><FaFacebook style={styles.icon} /></a>
            <a href="#"><FaTwitter style={styles.icon} /></a>
            <a href="#"><FaInstagram style={styles.icon} /></a>
            <a href="#"><FaLinkedin style={styles.icon} /></a>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
