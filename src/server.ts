import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { config } from './app/config';
import app from './app';

dotenv.config();

// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/library';

const PORT = config.port;
const MONGO_URI = config.mongoUri;

async function bootstrap() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect:', error);
  }
}

bootstrap();
