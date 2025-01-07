import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://57.129.71.13:3000/', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch events
export const fetchEvents = async () => {
  const response = await apiClient.get('/events');
  return response.data;
};
