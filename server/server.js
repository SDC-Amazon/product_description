const express = require("express");
const cors = require("cors");
const path = require("path");
const db =  require('./db');
const port = 3004;

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })) 

app.get('/cats', (req, res) => {
    //console.log(req.query.id)
    const id = req.query.id
    db.getItem( id, (err, data) =>  {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))