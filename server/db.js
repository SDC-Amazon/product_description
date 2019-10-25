var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//import more_db from './more_db.js'
var new_db = require('./new_db');
var more_db = require('./more_db')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('db connected!');
});
//mongoose.connect('mongodb://localhost/DescriptionDatabase', {useNewUrlParser: true});
//mongoose.connect('mongodb://localhost/DescriptionDatabase', {useUnifiedTopology: true});
//mongoose.connect('mongodb://localhost/DescriptionDatabase', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const uri= 'mongodb+srv://Rob:q25MKt@A^d4f@cluster0-6qxdh.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

var prodDescSchema = new Schema({
    id: Number,
    title:  String,
    seller: String,
    stars: Number,
    number_ratings: Number,
    prime: Boolean,
    options: [{
        option: String,
        price: Number
    }],
    description: [String]
});

var Descriptions = mongoose.model("DescriptionCollection", prodDescSchema);

// const getAll = (callback) => {
//     console.log()
//     Descriptions.insertMany(amishonArray, (err, res) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('successfully seeded!');
//         }
//     });
// }

const getItem = (id, callback)  => {
    Descriptions.find( {id: id}, (err, results) => {
        if (err) {
            callback(err, null)
        } else {
            //console.log(results);
            callback(null, results)
        }
    })
}
// const getPrices = ()  => {
//     Descriptions.find({})
//         .then((res) => {
//             let results = [];
//             // console.log(res[1])
//             for (var i = 0; i < res.length; i++) {
//                 // console.log(res[i])
//                 results.push(res[i].options[0].price);
//             }
//             console.log(results)
//         })
// }
// getPrices()

module.exports = {
    getItem
}

// Descriptions.insertMany(new_db.database_array, (err, res) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('successfully seeded!');
//     }
// });