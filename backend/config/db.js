const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_HOST,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true  // This should handle self-signed certificates
  }
};

sql.connect(config, (err) => {
  if (err) console.log(err);
  else console.log('Connected to MSSQL database');
});

module.exports = sql;
