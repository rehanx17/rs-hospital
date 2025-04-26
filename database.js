const Database = require('better-sqlite3'); // Use better-sqlite3
const db = new Database('appointments.db'); // Create or connect to DB

// Create the appointments table if it doesn't exist
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

module.exports = db; // Export the database instance
