import api from './api';

export const apiService = {
  // Auth
  login: (credentials) => api.post('/api/auth/login', credentials),
  register: (userData) => api.post('/api/auth/register', userData),
  forgotPassword: (email) => api.post('/api/auth/forgot-password', { email }),
  verifyOtp: (data) => api.post('/api/auth/verify-otp', data),
  resetPassword: (data) => api.post('/api/auth/reset-password', data),

  // User
  getProfile: () => api.get('/api/users/profile'),
  updateProfile: (data) => api.put('/api/users/profile', data),

  // Prescriptions
  getPrescriptions: () => api.get('/api/prescriptions'),
  createPrescription: (data) => api.post('/api/prescriptions', data),
  updatePrescription: (id, data) => api.put(`/api/prescriptions/${id}`, data),
  deletePrescription: (id) => api.delete(`/api/prescriptions/${id}`),

  // Reports
  getReports: () => api.get('/api/reports'),
  uploadReport: (formData) => api.post('/api/reports', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  deleteReport: (id) => api.delete(`/api/reports/${id}`),
  downloadReport: (id) => api.get(`/api/reports/download/${id}`, { responseType: 'blob' }),

  // Appointments
  getAppointments: () => api.get('/api/appointments'),
  createAppointment: (data) => api.post('/api/appointments', data),
  updateAppointment: (id, data) => api.put(`/api/appointments/${id}`, data),
  cancelAppointment: (id) => api.patch(`/api/appointments/${id}/cancel`)
};

export default apiService;
