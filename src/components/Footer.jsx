import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#222',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      textAlign: 'center',
      width: '100%',
      height: 'auto',
      marginTop: 'auto',
      overflow: 'hidden',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto',
      padding: '0 1rem',
    },
    column: {
      flex: '1',
      minWidth: '250px',
      margin: '0.5rem',
      textAlign: 'left',
    },
    aboutText: {
      margin: '5px 0',
      lineHeight: '1.4',
      maxWidth: '250px',
      textAlign: 'left',
      wordWrap: 'break-word',
    },
    links: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '0.9rem',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'left',
      gap: '10px',
      marginTop: '5px',
    },
    icon: {
      color: 'white',
      fontSize: '1.2rem',
    },
    '@media (max-width: 768px)': {
      container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
      },
      column: {
        minWidth: '100%',
        textAlign: 'center',
      },
      aboutText: {
        maxWidth: '90%',
        margin: '0 auto',
      },
      socialIcons: {
        justifyContent: 'center',
      },
    },
    content: {
      paddingBottom: '60px', // Adjust based on footer height
    },
  };

  return (
    <>
      <div style={styles.content}></div>
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.column}>
            <h4>About Us</h4>
            <p style={styles.aboutText}>
              We provide healthcare solutions to make your life better and ensure accessibility for all.
            </p>
          </div>

          <div style={styles.column}>
            <h4>Quick Links</h4>
            <nav style={styles.links}>
              <a href="/home" style={styles.link}>Home</a>
              <a href="/services" style={styles.link}>Services</a>
              <a href="/contact" style={styles.link}>Contact</a>
            </nav>
          </div>

          <div style={styles.column}>
            <h4>Contact Us</h4>
            <p style={{ margin: '5px 0', lineHeight: '1.4' }}>Email: support@healthcare.com</p>
            <p style={{ margin: '5px 0', lineHeight: '1.4' }}>Phone: +123-456-7890</p>
          </div>

          <div style={styles.column}>
            <h4>Follow Us</h4>
            <div style={styles.socialIcons}>
              <a href="#" style={styles.icon}><FaFacebook /></a>
              <a href="#" style={styles.icon}><FaTwitter /></a>
              <a href="#" style={styles.icon}><FaInstagram /></a>
              <a href="#" style={styles.icon}><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
