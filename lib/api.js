import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://64.112.124.78:8001', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch events
export const fetchEvents = async () => {
  const response = await apiClient.get('/events');
  return response.data;
};
