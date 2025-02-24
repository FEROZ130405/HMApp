import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [newPrescription, setNewPrescription] = useState({
    medication: '',
    dosage: '',
    frequency: '',
    duration: '',
    notes: ''
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isMobile] = useState(window.innerWidth <= 768);
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editingPrescription, setEditingPrescription] = useState({
    medication: '',
    dosage: '',
    frequency: '',
    duration: '',
    notes: ''
  });

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 'calc(100vh - 64px)',
      padding: '2rem',
      backgroundColor: '#f8fafc',
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
    },
    addButton: {
      backgroundColor: '#4a90e2',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    form: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '2rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      marginBottom: '1rem',
      borderRadius: '4px',
      border: '1px solid #e2e8f0',
    },
    prescriptionList: {
      display: 'grid',
      gap: '1rem',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
    },
    prescriptionCard: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    actionButtons: {
      display: 'flex',
      gap: '0.5rem',
      marginTop: '1rem',
    },
    editButton: {
      backgroundColor: '#4a90e2',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    deleteButton: {
      backgroundColor: '#ef4444',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    timestamp: {
      fontSize: '0.875rem',
      color: '#64748b',
      marginTop: '0.5rem',
    }
  };

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      const response = await api.get('/api/prescriptions');
      setPrescriptions(response.data);
    } catch (error) {
      console.error('Error fetching prescriptions:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/prescriptions', newPrescription);
      setIsAdding(false);
      setNewPrescription({
        medication: '',
        dosage: '',
        frequency: '',
        duration: '',
        notes: ''
      });
      fetchPrescriptions();
    } catch (error) {
      console.error('Error adding prescription:', error);
    }
  };

  const handleEdit = (prescription) => {
    setEditingId(prescription._id);
    setEditingPrescription({
      medication: prescription.medication,
      dosage: prescription.dosage,
      frequency: prescription.frequency,
      duration: prescription.duration,
      notes: prescription.notes || ''
    });
    setIsEditing(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/api/prescriptions/${editingId}`, editingPrescription);
      setPrescriptions(prescriptions.map(p => 
        p._id === editingId ? response.data : p
      ));
      setIsEditing(false);
      setEditingId(null);
      setEditingPrescription({
        medication: '',
        dosage: '',
        frequency: '',
        duration: '',
        notes: ''
      });
    } catch (error) {
      console.error('Error updating prescription:', error);
      alert('Failed to update prescription. Please try again.');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Prescriptions</h1>
        <button 
          style={styles.addButton}
          onClick={() => setIsAdding(!isAdding)}
        >
          {isAdding ? 'Cancel' : 'Add Prescription'}
        </button>
      </div>

      {isAdding && (
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Medication"
            value={newPrescription.medication}
            onChange={(e) => setNewPrescription({
              ...newPrescription,
              medication: e.target.value
            })}
            required
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Dosage"
            value={newPrescription.dosage}
            onChange={(e) => setNewPrescription({
              ...newPrescription,
              dosage: e.target.value
            })}
            required
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Frequency"
            value={newPrescription.frequency}
            onChange={(e) => setNewPrescription({
              ...newPrescription,
              frequency: e.target.value
            })}
            required
          />
          <input
            style={styles.input}
            type="text"
            placeholder="Duration"
            value={newPrescription.duration}
            onChange={(e) => setNewPrescription({
              ...newPrescription,
              duration: e.target.value
            })}
            required
          />
          <textarea
            style={styles.input}
            placeholder="Notes"
            value={newPrescription.notes}
            onChange={(e) => setNewPrescription({
              ...newPrescription,
              notes: e.target.value
            })}
          />
          <button type="submit" style={styles.addButton}>
            Save Prescription
          </button>
        </form>
      )}

      <div style={styles.prescriptionList}>
        {prescriptions.map((prescription) => (
          <div key={prescription._id} style={styles.prescriptionCard}>
            <h3>{prescription.medication}</h3>
            <p>Dosage: {prescription.dosage}</p>
            <p>Frequency: {prescription.frequency}</p>
            <p>Duration: {prescription.duration}</p>
            {prescription.notes && <p>Notes: {prescription.notes}</p>}
            <div style={styles.timestamp}>
              <p>Created: {formatDate(prescription.createdAt)}</p>
              <p>Last Updated: {formatDate(prescription.updatedAt)}</p>
            </div>
            <div style={styles.actionButtons}>
              <button 
                onClick={() => handleEdit(prescription)} 
                style={styles.editButton}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div style={styles.form}>
          <h2>Edit Prescription</h2>
          <form onSubmit={handleUpdate}>
            <input
              style={styles.input}
              type="text"
              placeholder="Medication"
              value={editingPrescription.medication}
              onChange={(e) => setEditingPrescription({
                ...editingPrescription,
                medication: e.target.value
              })}
              required
            />
            <input
              style={styles.input}
              type="text"
              placeholder="Dosage"
              value={editingPrescription.dosage}
              onChange={(e) => setEditingPrescription({
                ...editingPrescription,
                dosage: e.target.value
              })}
              required
            />
            <input
              style={styles.input}
              type="text"
              placeholder="Frequency"
              value={editingPrescription.frequency}
              onChange={(e) => setEditingPrescription({
                ...editingPrescription,
                frequency: e.target.value
              })}
              required
            />
            <input
              style={styles.input}
              type="text"
              placeholder="Duration"
              value={editingPrescription.duration}
              onChange={(e) => setEditingPrescription({
                ...editingPrescription,
                duration: e.target.value
              })}
              required
            />
            <textarea
              style={styles.input}
              placeholder="Notes"
              value={editingPrescription.notes}
              onChange={(e) => setEditingPrescription({
                ...editingPrescription,
                notes: e.target.value
              })}
            />
            <div>
              <button type="submit" style={styles.addButton}>
                Update Prescription
              </button>
              <button 
                type="button" 
                style={{...styles.addButton, backgroundColor: '#ef4444'}}
                onClick={() => {
                  setIsEditing(false);
                  setEditingId(null);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Prescriptions;
