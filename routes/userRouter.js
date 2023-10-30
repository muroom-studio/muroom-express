import { Router } from 'express';
import AuthController from '../controllers/authController.js';

const userRouter = Router();
const authController = new AuthController();

userRouter.post('/kakao', authController.kakaoLogin);
userRouter.get('/verify', authController.verifyKakaoToken, (req, res) => {
  res.json({ message: '액세스 토큰이 유효합니다.' });
});

export default userRouter;