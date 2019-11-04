const express = require("express");
const cors = require("cors");
const path = require("path");
const db =  require('./db');
const cassandradb = require('../db/cassandra');
const port = 3004;

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })) 

app.get('/prodDesc', (req, res) => {
    //console.log(req.query.id)
    const id = req.query.id
    cassandradb.getItem( id, (err, data) =>  {
        if (err) {
            res.send(err);
        } else {
            res.send(data.rows[0]);
        }
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))