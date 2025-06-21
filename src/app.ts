import express, { Request, Response } from 'express';
import cors from 'cors';
import { router } from './app/routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Library Management API is Running!');
});

export default app;

