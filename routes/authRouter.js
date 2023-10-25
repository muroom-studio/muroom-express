import { Router } from 'express';
import AuthController from '../controllers/authController';

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/kakao', authController.kakaoLogin);

export default authRouter;
