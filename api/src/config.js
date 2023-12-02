/** @format */

const PORT = process.env.PORT || 3001;
const APP_URL = process.env.APP_URL || "http://localhost:3000";
const NODE_ENV = process.env.NODE_ENV || "dev";
const MONGODB_URI = process.env.MONGODB_URI;

module.exports = {
  PORT,
  APP_URL,
  NODE_ENV,
  MONGODB_URI,
};
