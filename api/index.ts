import express from 'express';
import { router } from '../src/app/routes';
import serverless from 'serverless-http';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB connected on Vercel'))
  .catch((error) => console.error('MongoDB connection error:', error));

export const handler = serverless(app);
