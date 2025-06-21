import express, { Request, Response } from 'express';
import cors from 'cors';
import { router } from './app/routes';
import { globalErrorHandler } from './app/middlewares/errorHandler';
import serverless from 'serverless-http';
import './config/db';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Library Management API is Running!');
});


export const handler = serverless(app);