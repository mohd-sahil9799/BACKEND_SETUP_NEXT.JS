// pages/api/some-api-route.js
import mongodbMiddleware from '../../middleware/mongodb';

const handler = async (req, res) => {
  console.log('API Route: Connection Status');
  if (!req.dbClient) {
    return res.status(500).json({ error: 'Failed to establish MongoDB connection' });
  }

  const collection = req.dbClient.collection('your_collection_name');

  res.status(200).json({ message: 'Success' });
};

export default mongodbMiddleware(handler);
