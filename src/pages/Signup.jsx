import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 120px)',
      padding: isMobile ? '1rem' : '2rem',
      backgroundColor: '#f8fafc',
    },
    formContainer: {
      backgroundColor: '#ffffff',
      padding: isMobile ? '1.5rem' : '2.5rem',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
    },
    title: {
      fontSize: isMobile ? '1.75rem' : '2rem',
      color: '#1a1a1a',
      marginBottom: '1.5rem',
      fontWeight: '600',
    },
    subtitle: {
      color: '#64748b',
      fontSize: '0.875rem',
      marginTop: '-1rem',
      marginBottom: '1.5rem',
    },
    inputGroup: {
      position: 'relative',
      marginBottom: '1rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      paddingRight: '3.5rem', // Add space for the show/hide button
      marginBottom: '1rem',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      fontSize: '1rem',
      backgroundColor: '#f8fafc',
      transition: 'all 0.3s ease',
      outline: 'none',
      boxSizing: 'border-box',
      color: '#000000',
    },
    inputFocus: {
      border: '1px solid #4a90e2',
      boxShadow: '0 0 0 3px rgba(74, 144, 226, 0.1)',
    },
    button: {
      width: '100%',
      padding: '0.75rem',
      marginTop: '1rem',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#4a90e2',
      color: 'white',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#357abd',
      },
    },
    loginLink: {
      marginTop: '1.5rem',
      color: '#64748b',
      fontSize: '0.875rem',
    },
    loginLinkAnchor: {
      color: '#4a90e2',
      textDecoration: 'none',
      fontWeight: '500',
      marginLeft: '0.25rem',
      transition: 'color 0.3s ease',
    },
    showPasswordButton: {
      position: 'absolute',
      right: '10px',
      top: '0.52rem', // Adjusted from 0.75rem to 0.65rem
      background: 'none',
      border: 'none',
      color: '#64748b',
      cursor: 'pointer',
      padding: '0.25rem',
      fontSize: '0.875rem',
      transform: 'none', // Remove transform
    },
    errorMessage: {
      color: '#ef4444',
      fontSize: '0.875rem',
      marginTop: '0.5rem',
      textAlign: 'left',
    },
    terms: {
      fontSize: '0.75rem',
      color: '#64748b',
      marginTop: '1rem',
      textAlign: 'center',
    },
    termsLink: {
      color: '#4a90e2',
      textDecoration: 'none',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (e) => {
    e.target.style.border = styles.inputFocus.border;
    e.target.style.boxShadow = styles.inputFocus.boxShadow;
  };

  const handleBlur = (e) => {
    e.target.style.border = styles.input.border;
    e.target.style.boxShadow = 'none';
  };

  return (
    <div style={styles.container}>
      <form style={styles.formContainer} onSubmit={handleSubmit}>
        <h1 style={styles.title}>Create Account</h1>
        <p style={styles.subtitle}>Join us to access all our features</p>

        <div style={styles.inputGroup}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            style={styles.input}
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            style={styles.input}
            value={formData.password}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
          <button
            type="button"
            style={styles.showPasswordButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button type="submit" style={styles.button}>
          Create Account
        </button>

        <p style={styles.terms}>
          By signing up, you agree to our{' '}
          <Link to="/terms" style={styles.termsLink}>Terms of Service</Link>
          {' '}and{' '}
          <Link to="/privacy" style={styles.termsLink}>Privacy Policy</Link>
        </p>

        <p style={styles.loginLink}>
          Already have an account?
          <Link to="/login" style={styles.loginLinkAnchor}>
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;