import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api'; // Fix import path

const Login = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

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
    forgotPassword: {
      color: '#4a90e2',
      textDecoration: 'none',
      fontSize: '0.875rem',
      marginTop: '1rem',
      display: 'inline-block',
      transition: 'color 0.3s ease',
    },
    signupLink: {
      marginTop: '1.5rem',
      color: '#64748b',
      fontSize: '0.875rem',
    },
    signupLinkAnchor: {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Only use the login function from AuthContext, remove direct API call
      const userData = await login({ email, password });
      console.log('Login successful:', userData);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(
        err.response?.data?.message || 
        'Failed to login. Please check your credentials.'
      );
    }
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
        <h1 style={styles.title}>Welcome Back</h1>
        
        {error && <div style={styles.errorMessage}>{error}</div>}

        <div style={styles.inputGroup}>
          <input
            type="email"
            placeholder="Email address"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          Sign In
        </button>

        <Link to="/forgot-password" style={styles.forgotPassword}>
          Forgot your password?
        </Link>

        <p style={styles.signupLink}>
          Don't have an account?
          <Link to="/signup" style={styles.signupLinkAnchor}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;