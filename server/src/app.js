import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const app = express();  

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'LifeLink API is running' });
});
app.use(notFound);
app.use(errorHandler);

export default app;