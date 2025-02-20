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
      backgroundColor: '#1a1a1a',
      color: '#f5f5f5',
      padding: '3rem 0',
      width: '100%',
      marginTop: 'auto',
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      left: '0',
      right: '0',
      overflowX: 'hidden',
    },
    containerDesktop: {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      flexWrap: isMobile ? 'wrap' : 'nowrap',
      gap: '2rem',
    },
    containerMobile: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      gap: '2rem',
      padding: '0 1.5rem',
      width: '100%',
      maxWidth: '100%',
      boxSizing: 'border-box',
    },
    column: {
      flex: isMobile ? '1 1 100%' : '1',
      minWidth: isMobile ? 'auto' : '200px',
      marginBottom: isMobile ? '1.5rem' : '0',
      maxWidth: isMobile ? '100%' : '250px',
    },
    heading: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '1.2rem',
      color: '#fff',
      position: 'relative',
      paddingBottom: '0.5rem',
      whiteSpace: 'nowrap',
    },
    headingUnderline: {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: isMobile ? '50%' : '0',
      transform: isMobile ? 'translateX(-50%)' : 'none',
      width: '40px',
      height: '3px',
      backgroundColor: '#4a90e2',
    },
    nav: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
    },
    link: {
      color: '#f5f5f5',
      textDecoration: 'none',
      transition: 'color 0.3s ease, transform 0.3s ease',
      display: 'inline-block',
      ':hover': {
        color: '#4a90e2',
        transform: 'translateX(5px)',
      },
    },
    socialIcons: {
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-start',
      gap: '1rem',
      marginTop: '1rem',
      flexWrap: 'wrap',
    },
    icon: {
      color: '#f5f5f5',
      fontSize: '1.5rem',
      transition: 'all 0.3s ease',
      padding: '0.5rem',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    iconHover: {
      transform: 'translateY(-3px)',
      color: '#4a90e2',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
      wordBreak: 'break-word',
    },
    contactText: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#f5f5f5',
      flexWrap: 'wrap',
    },
    mobileNav: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '1rem',
      flexWrap: 'wrap',
    },
    mobileDivider: {
      color: '#4a90e2',
      margin: '0 0.5rem',
    },
    aboutText: {
      lineHeight: '1.6',
      wordBreak: 'break-word',
    },
  };

  const renderHeading = (text) => (
    <h4 style={styles.heading}>
      {text}
      <div style={styles.headingUnderline} />
    </h4>
  );

  const SocialIcon = ({ Icon, link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.firstChild.style, styles.iconHover);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.firstChild.style, styles.icon);
      }}
    >
      <Icon style={styles.icon} />
    </a>
  );

  return (
    <footer style={styles.footer}>
      {!isMobile ? (
        <div style={styles.containerDesktop}>
          <div style={styles.column}>
            {renderHeading('About Us')}
            <p style={styles.aboutText}>
              We provide comprehensive healthcare solutions designed to enhance your well-being and improve quality of life through innovative medical services and patient-centered care.
            </p>
          </div>
          <div style={styles.column}>
            {renderHeading('Quick Links')}
            <nav style={styles.nav}>
              <a href="/home" style={styles.link}>Home</a>
              <a href="/services" style={styles.link}>Services</a>
              <a href="/about" style={styles.link}>About</a>
              <a href="/contact" style={styles.link}>Contact</a>
            </nav>
          </div>
          <div style={styles.column}>
            {renderHeading('Contact Us')}
            <div style={styles.contactInfo}>
              <p style={styles.contactText}>Email: support@healthcare.com</p>
              <p style={styles.contactText}>Phone: +123-456-7890</p>
              <p style={styles.contactText}>Address: 123 Healthcare Ave, Medical District</p>
            </div>
          </div>
          <div style={styles.column}>
            {renderHeading('Follow Us')}
            <div style={styles.socialIcons}>
              <SocialIcon Icon={FaFacebook} link="https://facebook.com" />
              <SocialIcon Icon={FaTwitter} link="https://twitter.com" />
              <SocialIcon Icon={FaInstagram} link="https://instagram.com" />
              <SocialIcon Icon={FaLinkedin} link="https://linkedin.com" />
            </div>
          </div>
        </div>
      ) : (
        <div style={styles.containerMobile}>
          {renderHeading('HealthCareApp')}
          <nav style={styles.mobileNav}>
            <a href="/home" style={styles.link}>Home</a>
            <span style={styles.mobileDivider}>•</span>
            <a href="/services" style={styles.link}>Services</a>
            <span style={styles.mobileDivider}>•</span>
            <a href="/contact" style={styles.link}>Contact</a>
          </nav>
          <div style={styles.contactInfo}>
            <p style={styles.contactText}>Email: support@healthcare.com</p>
            <p style={styles.contactText}>Phone: +123-456-7890</p>
          </div>
          <div style={styles.socialIcons}>
            <SocialIcon Icon={FaFacebook} link="https://facebook.com" />
            <SocialIcon Icon={FaTwitter} link="https://twitter.com" />
            <SocialIcon Icon={FaInstagram} link="https://instagram.com" />
            <SocialIcon Icon={FaLinkedin} link="https://linkedin.com" />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;