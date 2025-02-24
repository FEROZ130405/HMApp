import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState({
    name: '',
    file: null
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isMobile] = useState(window.innerWidth <= 768);
  const { user } = useAuth();

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
    fileInput: {
      marginBottom: '1rem',
    },
    reportList: {
      display: 'grid',
      gap: '1rem',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
    },
    reportCard: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    actionButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '1rem',
    },
    button: {
      backgroundColor: '#4a90e2',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await api.get('/api/reports');
      setReports(response.data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newReport.name);
    formData.append('file', newReport.file);

    try {
      await api.post('/api/reports', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setIsAdding(false);
      setNewReport({ name: '', file: null });
      fetchReports();
    } catch (error) {
      console.error('Error adding report:', error);
    }
  };

  const handleFileChange = (e) => {
    setNewReport({
      ...newReport,
      file: e.target.files[0]
    });
  };

  const handleDelete = async (reportId) => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      try {
        await api.delete(`/api/reports/${reportId}`);
        setReports(reports.filter(report => report._id !== reportId));
      } catch (error) {
        console.error('Error deleting report:', error);
        alert('Failed to delete report. Please try again.');
      }
    }
  };

  const handleDownload = async (reportId, reportName) => {
    try {
      const response = await api.get(`/api/reports/download/${reportId}`, {
        responseType: 'blob'
      });

      // Create a blob URL and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', reportName); // Set the file name for download
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Failed to download file. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Medical Reports</h1>
        <button 
          style={styles.addButton}
          onClick={() => setIsAdding(!isAdding)}
        >
          {isAdding ? 'Cancel' : 'Add Report'}
        </button>
      </div>

      {isAdding && (
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            placeholder="Report Name"
            value={newReport.name}
            onChange={(e) => setNewReport({
              ...newReport,
              name: e.target.value
            })}
            required
          />
          <input
            style={styles.fileInput}
            type="file"
            onChange={handleFileChange}
            required
          />
          <button type="submit" style={styles.addButton}>
            Upload Report
          </button>
        </form>
      )}

      <div style={styles.reportList}>
        {reports.map((report) => (
          <div key={report._id} style={styles.reportCard}>
            <h3>{report.name}</h3>
            <p>Uploaded: {new Date(report.createdAt).toLocaleDateString()}</p>
            <div style={styles.actionButtons}>
              <button 
                onClick={() => handleDownload(report._id, report.fileName)}
                style={styles.button}
              >
                Download
              </button>
              <button 
                onClick={() => handleDelete(report._id)}
                style={{...styles.button, backgroundColor: '#ef4444'}}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
