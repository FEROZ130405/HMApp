import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';  // Add this import
import { useAuth } from '../context/AuthContext';
import Loading from '../components/Loading';

const Dashboard = () => {
  const [isMobile] = useState(window.innerWidth <= 768);
  const { user, loading } = useAuth();
  const [error, setError] = useState(null);

  // Add error boundary
  const handleError = (error) => {
    console.error('Dashboard Error:', error);
    setError(error.message || 'An error occurred loading the dashboard');
  };

  try {
    if (loading) {
      return <Loading />;
    }

    if (!user) {
      return <Navigate to="/login" />;
    }

    return (
      <div style={{ padding: isMobile ? '1rem' : '2rem' }}>
        <div style={{ 
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 style={{ marginBottom: '2rem' }}>Welcome, {user.name}!</h1>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem'
          }}>
            {/* User Info Card */}
            <div style={{ 
              backgroundColor: '#f8fafc',
              padding: '1.5rem',
              borderRadius: '8px'
            }}>
              <h2 style={{ marginBottom: '1rem' }}>Your Information</h2>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <p><strong>Contact:</strong> {user.contact}</p>
              <p><strong>Address:</strong> {user.address}</p>
            </div>

            {/* Recent Activity Card */}
            <div style={{ 
              backgroundColor: '#f8fafc',
              padding: '1.5rem',
              borderRadius: '8px'
            }}>
              <h2 style={{ marginBottom: '1rem' }}>Recent Activity</h2>
              <p>No recent activities to show</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    handleError(err);
    return (
      <div style={{ 
        padding: '2rem',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h2 style={{ color: '#ef4444', marginBottom: '1rem' }}>Something went wrong</h2>
        <p style={{ marginBottom: '1rem' }}>{error}</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#4a90e2',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }
};

export default Dashboard;
