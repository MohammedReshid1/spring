import { fetchEvents } from '../../lib/api';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const events = await fetchEvents(); // Fetches events using the helper function
      res.status(200).json(events); // Sends the events data as JSON response
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch events' }); // Handles any errors
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`); // If method is not GET
  }
}
