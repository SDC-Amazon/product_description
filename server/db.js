var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//faker stuff
var faker = require('faker');
var temp = faker.name.findName();
console.log(temp);

mongoose.connect('mongodb://localhost/productDescription', {useNewUrlParser: true});

// for(var i =0; i< 10; i++) {
//     {
//     id: i,
//     title:  'X',
//     seller: faker.company.companyName,
//     stars: (Math.floor(Math.random() * 51) / 10),
//     number_ratings: faker.random.number,
//     prime: faker.random.boolean,
//     options: [{
//         option: faker.commerce.productAdjective,
//         price: faker.commerce.price
//     }],
//     description: [faker.lorem.lines,faker.lorem.lines,faker.lorem.lines,faker.lorem.lines]
//     }
// }

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

    // Descriptions.insertMany(amishonArray, (err, res) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log('successfully seeded!');
    //     }
    // });
    
// const getAll = (callback) => {
//     console.log()
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

module.exports = {
    getItem
}