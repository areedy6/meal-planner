var mysql = require('mysql')
var connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: 'newfoodfighters',
    user: 'root',
    password: 'password',
    database: 'mealUserDb',
    port: '3306'
  })
};
connection.connect()
module.exports = connection
