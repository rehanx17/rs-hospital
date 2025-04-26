const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./database"); // Import your DB connection


app.post("/api/book", (req, res) => {
  const { name, email, phone, date, time, message } = req.body;

  const query = `
    INSERT INTO appointments (name, email, phone, date, time, message)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  try {
    const stmt = db.prepare(query);
    stmt.run(name, email, phone, date, time, message);
    res.json({ message: "Appointment saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save appointment." });
  }
});

