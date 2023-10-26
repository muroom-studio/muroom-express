import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

class AuthController {
  kakaoLogin = async (req, res) => {
    const { code } = req.body;

    const kakaoResponse = await axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&code=${code}`,
      {},
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
          Authorization: 'Bearer ',
        },
      }
    );

    res.status(201).json({
      status: 'success',
      message: '카카오 로그인 성공',
      accessToken: kakaoResponse.data.access_token,
    });
  };
}

export default AuthController;
