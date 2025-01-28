import express from 'express';
import userRouter from './routes/userRouter.js';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', userRouter);
export default app;
