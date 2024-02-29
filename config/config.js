require('dotenv').config();

const config = {
  host: process.env.HOST || 'localhost',
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  apiKeyToken: process.env.API_KEY,
  authJwtSecret: process.env.JWT_SECRET,
  authMail: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
}

module.exports = { config };
