import axios from 'axios';
import dotenv from 'dotenv';
import User from '../models/userModel.js';

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
      },
    );

    const kakaoUserAccessToken = kakaoResponse.data.access_token;

    const kakaoUserResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${kakaoUserAccessToken}`,
      },
    });

    console.log('data: ', kakaoUserResponse.data);
    const name = kakaoUserResponse.data.properties.nickname;
    const profileImage = kakaoUserResponse.data.properties.profile_image;
    const email = kakaoUserResponse.data.kakao_account.email;

    const newUser = await User.create({
      name,
      profileImage,
      email,
    });

    res.status(201).json({
      status: 'success',
      message: '카카오 로그인 성공',
      accessToken: kakaoResponse.data.access_token,
      user: newUser,
    });
  };
}

export default AuthController;
