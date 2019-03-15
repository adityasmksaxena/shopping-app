const dotenv = require('dotenv');

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development' || env === 'dev';
const isTest = env === 'testing' || env === 'test';
const isStag = env === 'staging' || env === 'stag';
const isProd = env === 'production' || env === 'prod';
const getServerPort = () => {
  if (isTest) return process.env.TEST_ENV_PORT;
  if (isDev) return process.env.DEV_ENV_PORT;
  return process.env.PORT;
};
const PORT = getServerPort();
const clientBaseUrl = process.env.CLIENT_BASE_URL || 'http://localhost:3000';
const dbUrl = `${process.env.MONGODB_URI}${isTest ? '-test' : ''}`;

module.exports = {
  env,
  isDev,
  isTest,
  isStag,
  isProd,
  PORT,
  clientBaseUrl,
  dbUrl,
};
