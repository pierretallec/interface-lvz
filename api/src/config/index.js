const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const PORT = process.env.PORT || 3001;

const ENVIRONMENT = process.env.NODE_ENV || "local";

const CONFIGFILE = {
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
};

// if (ENVIRONMENT === "local") console.log(CONFIGFILE);

module.exports = CONFIGFILE;
