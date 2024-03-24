const express = require("express");
const mysql = require("mysql");

const app = express();
const PORT = 3000;

app.use(express.json());

// Veze s bazom podataka
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ap2024",
});

// Provjera veze s bazom podataka
connection.connect((err) => {
  if (err) {
    console.error("Pogreska pri povezivanju s bazom podataka:", err);
    return;
  }
  console.log("Povezan s bazom podataka!");
});

// POST route za dodavanje novog reda u tablicu
app.post("/dodaj", (req, res) => {
  const { naziv, kategorija, cijena, dostupnost } = req.body;

  const query = `INSERT INTO proizvodi (naziv, kategorija, cijena, dostupnost) VALUES (?, ?, ?, ?)`;
  connection.query(
    query,
    [naziv, kategorija, cijena, dostupnost],
    (err, results) => {
      if (err) {
        console.error("Pogreska pri dodavanju proizvoda:", err);
        return res.status(500).send("Pogreska pri dodavanju proizvoda");
      }
      console.log("Proizvod je uspješno dodan");
      res.status(200).send("Proizvod je uspješno dodan");
    }
  );
});

// GET route za prikaz svih proizvoda iz tablice
app.get("/proizvodi", (req, res) => {
  const query = "SELECT * FROM proizvodi";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Pogreska pri dohvacanju proizvoda:", err);
      return res.status(500).send("Pogreska pri dohvacanju proizvoda");
    }
    console.log("Proizvodi su uspjesno dohvaceni");
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
