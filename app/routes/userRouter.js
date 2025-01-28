import express from 'express';
import {createUser} from '../controller/userController.js';
import cors from 'cors';

const router = express();
router.use(cors());
const userRouter = express.Router();
userRouter.post('/users', createUser);
export default userRouter;