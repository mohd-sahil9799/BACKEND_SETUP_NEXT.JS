

import connect from '../lib/mongodb';
import nextConnect from 'next-connect';

const middleware = nextConnect();

middleware.use(async (req, res, next) => {
  const { success, db, error } = await connect();

  if (success) {
    console.log('MongoDB connection established');
    req.dbClient = db;
    return next();
  } else {
    console.error('Failed to establish MongoDB connection:', error);
    return res.status(500).json({ error });
  }
});

export default middleware;
