
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  try {
    console.log('Connecting to MongoDB...');

    if (!client.isConnected()) {
      await client.connect();
    }

    console.log('Connected to MongoDB');

    return { success: true, db: client.db(process.env.DB_NAME) };
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return { success: false, error: 'Failed to connect to MongoDB' };
  }
}

export default connect;
