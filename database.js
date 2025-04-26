const Database = require('better-sqlite3');
const db = new Database('appointments.db');
const db = new sqlite3.Database("appointments.db");

db.prepare(`
  CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    date TEXT,
    time TEXT,
    message TEXT
  )
`).run();


module.exports = db;
