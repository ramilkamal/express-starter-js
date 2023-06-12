const path = require("path");
const express = require("express");
const books = require("./db/books");

const app = express();

app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
    res.send("<h1>Hello Express.js</h1>");
});

app.get("/api/books", (req, res) => {
    res.json(books);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
