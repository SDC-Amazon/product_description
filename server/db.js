var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//import more_db from './more_db.js'

mongoose.connect('mongodb://localhost/productDescription', {useNewUrlParser: true});

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

var Descriptions = mongoose.model("ProductDescriptions", prodDescSchema);


    
const getAll = (callback) => {
    console.log()
    Descriptions.insertMany(amishonArray, (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log('successfully seeded!');
        }
    });
}


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

module.exports = {
    getItem
}

// Descriptions.insertMany(amishonArray, (err, res) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('successfully seeded!');
//     }
// });