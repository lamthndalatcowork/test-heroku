const mysql = require('mysql')
const settingsConnect = {
  host: "remotemysql.com",
  user: "hc0NRaldjW",
  password: "",
  database: "hc0NRaldjW"
};
module.exports.settingsConnect = settingsConnect;
const db = mysql.createConnection(settingsConnect);
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL");
  });
module.exports.dbConnected = db;