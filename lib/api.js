import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.springofknowledge.org/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch events
export const fetchEvents = async () => {
  const response = await apiClient.get('/events');
  return response.data;
};
