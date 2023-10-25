import express from 'express';
import dotenv from 'dotenv';

const app = express(); // express 서버 생성

app.get('/', (req, res) => {
  res.status(200).send('[muroom studio] Hello, world.');
});

// 서버 시작
const port = process.env.PORT || 8080;
const url = process.env.URL || `http://localhost:${port}`;
const server = app.listen(port, () => {
  console.log(`[muroom studio] Express server listening on port ${port}\n[muroom studio] API: ${url}`);
});
