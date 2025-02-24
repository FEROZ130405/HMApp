export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error
    return error.response.data.message || 'Server error occurred';
  } else if (error.request) {
    // Request made but no response
    return 'No response from server. Please check your internet connection.';
  } else {
    // Request setup error
    return 'Failed to make request. Please try again.';
  }
};
