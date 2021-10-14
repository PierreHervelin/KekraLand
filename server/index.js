const express = require("express");
const mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "wasef",
  password: "wasef",
  database: "kekradb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const PORT = 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});