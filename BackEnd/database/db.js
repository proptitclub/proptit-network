import mysql from 'mysql2';

// export const connection = mysql.createConnection({
//   host: '35.240.232.224',
//   user: 'root',
//   password: '',
//   port: '',
//   database: 'proptit',
// });

export const connection = mysql.createConnection({
  host: '35.240.232.224',
  user: 'root',
  password: '',
  port: '3306',
  database: 'proptit',
});

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'proptit',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });
