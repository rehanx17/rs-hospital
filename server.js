const db = require("./database");

app.post("/api/book", (req, res) => {
  const { name, email, phone, date, time, message } = req.body;

  const query = `
    INSERT INTO appointments (name, email, phone, date, time, message)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(query, [name, email, phone, date, time, message], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ message: "Error saving appointment." });
    } else {
      res.json({ message: "Appointment saved!", id: this.lastID });
    }
  });
});
