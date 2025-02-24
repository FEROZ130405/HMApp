import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const UserProfile = () => {
  const { user, updateProfile } = useAuth();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    address: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isMobile] = useState(window.innerWidth <= 768);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(100vh - 64px)', // Adjusted to match login/signup
      padding: '2rem',
      backgroundColor: '#f8fafc',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      padding: '2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      width: '100%',
      maxWidth: '480px', // Adjusted to match login/signup
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
    },
    title: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      color: '#1a1a1a',
      marginBottom: '0.5rem',
    },
    field: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#4a5568',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '4px',
      border: '1px solid #e2e8f0',
      marginBottom: '1rem',
    },
    button: {
      backgroundColor: '#4a90e2',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '1rem',
    },
    cancelButton: {
      backgroundColor: '#cbd5e0',
      color: '#2d3748',
    }
  };

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        age: user.age || '',
        gender: user.gender || '',
        address: user.address || ''
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({
        name: profile.name,
        phone: profile.phone,
        age: profile.age ? parseInt(profile.age) : undefined,
        gender: profile.gender,
        address: profile.address
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Profile</h1>
          {!isEditing && (
            <button 
              style={styles.button}
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div style={styles.field}>
            <label style={styles.label}>Name</label>
            <input
              style={styles.input}
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              disabled={!isEditing}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              style={styles.input}
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({...profile, email: e.target.value})}
              disabled={!isEditing}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Phone</label>
            <input
              style={styles.input}
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({...profile, phone: e.target.value})}
              disabled={!isEditing}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Age</label>
            <input
              style={styles.input}
              type="number"
              value={profile.age}
              onChange={(e) => setProfile({...profile, age: e.target.value})}
              disabled={!isEditing}
              min="0"
              max="120"
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Gender</label>
            <select
              style={styles.input}
              value={profile.gender}
              onChange={(e) => setProfile({...profile, gender: e.target.value})}
              disabled={!isEditing}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Address</label>
            <textarea
              style={styles.input}
              value={profile.address}
              onChange={(e) => setProfile({...profile, address: e.target.value})}
              disabled={!isEditing}
            />
          </div>

          {isEditing && (
            <div>
              <button type="submit" style={styles.button}>
                Save Changes
              </button>
              <button 
                type="button" 
                style={{...styles.button, ...styles.cancelButton}}
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
