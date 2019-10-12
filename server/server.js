const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db.js");
const port = 3030;

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());
app.use(express.json());

app.get('/cats', (req, res) => {
    res.send('STUFF')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))