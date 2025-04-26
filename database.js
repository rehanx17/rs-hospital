const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("appointments.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      phone TEXT,
      date TEXT,
      time TEXT,
      message TEXT
    )
  `);
});

module.exports = db;
