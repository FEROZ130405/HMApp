import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from '../components/Loading';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [isMobile] = useState(window.innerWidth <= 768);

  const styles = {
    container: {
      padding: isMobile ? '1rem' : '2rem',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: 'calc(100vh - 64px)',
      backgroundColor: '#f8fafc',
    },
    welcomeSection: {
      marginBottom: '2rem',
      padding: '2rem',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    title: {
      fontSize: isMobile ? '1.75rem' : '2.5rem',
      color: '#1a1a1a',
      marginBottom: '1.5rem',
      fontWeight: '600',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginTop: '2rem',
    },
    infoCard: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    label: {
      fontSize: '0.875rem',
      color: '#64748b',
      marginBottom: '0.5rem',
      fontWeight: '500',
    },
    value: {
      fontSize: '1rem',
      color: '#1a1a1a',
      fontWeight: '500',
    }
  };

  if (loading) return <Loading />;
  if (!user) return <Navigate to="/login" />;

  return (
    <div style={styles.container}>
      <div style={styles.welcomeSection}>
        <h1 style={styles.title}>Welcome, {user.name}</h1>
      </div>

      <div style={styles.grid}>
        <div style={styles.infoCard}>
          <div style={styles.label}>Email</div>
          <div style={styles.value}>{user.email}</div>
        </div>

        <div style={styles.infoCard}>
          <div style={styles.label}>Phone</div>
          <div style={styles.value}>{user.phone || 'Not provided'}</div>
        </div>

        <div style={styles.infoCard}>
          <div style={styles.label}>Age</div>
          <div style={styles.value}>{user.age || 'Not provided'}</div>
        </div>

        <div style={styles.infoCard}>
          <div style={styles.label}>Gender</div>
          <div style={styles.value}>{user.gender || 'Not provided'}</div>
        </div>

        <div style={styles.infoCard}>
          <div style={styles.label}>Address</div>
          <div style={styles.value}>{user.address || 'Not provided'}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
