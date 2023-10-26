import dotenv from 'dotenv';

import app from './app.js';

dotenv.config({ path: './config.env' });

// 서버 시작
const port = process.env.PORT || 8080;
const url = process.env.URL || `http://localhost:${port}`;
const server = app.listen(port, () => {
  console.log(`[muroom studio] Express server listening on port ${port}\n[muroom studio] API: ${url}`);
});
