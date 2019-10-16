const express = require("express");
const cors = require("cors");
const path = require("path");
const db =  require('./db');
const port = 3030;

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());
app.use(express.json());

app.get('/cats', (req, res) => {

    db.getItem( 4, (err, data) =>  {
        if (err) {
            console.log(err)
        } else {
            //console.log(data)
            res.send(data)
        }
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))