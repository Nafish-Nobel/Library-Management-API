import express, { Request, Response } from 'express';
import cors from 'cors';
import { router } from './app/routes';


const app = express();

app.use(cors(
  {
    origin: ["https://library-frontend-gam7rflx7-nafish-nobels-projects.vercel.app", "http://localhost:5173"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  }
));

// app.use(cors({
//   origin: 'https://library-frontend-gam7rflx7-nafish-nobels-projects.vercel.app',
// }));
// app.use(express.json({ limit: "25mb" }));

// app.use(cors());
app.use(express.json());

app.use('/api', router);
app.get('/', (req: Request, res: Response) => {
  res.send('Library Management API is Running!(Nafish-Nobel)');
});


export default app;

