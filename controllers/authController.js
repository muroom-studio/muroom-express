class AuthController {
  kakaoLogin = (req, res) => {
    // const { code } = req.body;
    console.log('req: ', req.body);
    // console.log(code);
    res.status(201).json({
      status: 'success',
      message: '카카오 로그인 성공',
    });
  };
}

export default AuthController;
