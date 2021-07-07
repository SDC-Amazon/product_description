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
            let formattedData = {
                id: data.rows[0].id,
                title: data.rows[0].title,
                seller: data.rows[0].seller,
                stars: data.rows[0].stars,
                number_ratings: data.rows[0].ratings,
                prime: data.rows[0].prime,
                options: [],
                description: [data.rows[0].description],
            };
            for (let i = 0; i < data.rows[0].prices.length; i++) {
                formattedData.options.push({
                    option: data.rows[0].options[i],
                    price: Number(data.rows[0].prices[i])
                });
            }
            res.send(formattedData);
        }
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))