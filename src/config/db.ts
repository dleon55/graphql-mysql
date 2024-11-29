import mysql from 'mysql2';

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'david',
  password : 'ABCdef123$%&',
  database: 'developers'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

export default connection;