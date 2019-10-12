var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prodDescSchema = new Schema({
    id: Number,
    title:  String,
    seller: String,
    stars: Number,
    number_ratings: Number,
    prime: Boolean,
    options: [{
        option: String,
        list_price: Number,
        price: Number
    }],
    description: [String]
    });

    var Descriptions = mongoose.model("ProductDescriptions", prodDescSchema);

    var amishon = new Descriptions({
        id: 1,
        title:  'Sweet Amish Vest',
        seller: 'Geoberti',
        stars: 4.6,
        number_ratings: 972,
        prime: true,
        options: [{
            option: 'Small',
            list_price: 19.99,
            price: 19.99
        },{
            option: 'Medium',
            list_price: 19.99,
            price: 19.99
        },{
            option: 'Large',
            list_price: 19.99,
            price: 19.99
        },{
            option: 'X-Large',
            list_price: 19.99,
            price: 19.99
        },{
            option: 'XXXXX-Large',
            list_price: 24.99,
            price: 24.99
        }],
        description: ['70% Polyester, 30% Rayon',
            'Formal Suit Vest',
            '5 Button Front For Sizes XS - 2X',
            '6 Button Front For Sizes 3X - 5X',
            '2 Pockets',
            'Adjustable Back Strap']
        },
        {
            id: 2,
            title:  'Super Sweet Amish Suspenders',
            seller: 'HDE',
            stars: 3.5,
            number_ratings: 605,
            prime: true,
            options: [{
                option: '42 inches',
                list_price: 7.99,
                price: 7.99
            },
            {
                option: '48 inches',
                list_price: 8.99,
                price: 8.99
            }],
            description: ['Quality y back style suspenders now available in 2 sizes and feature improved straight clips for a stronger hold',
                'Three (3) metal clips have standard plastic prongs that tightly attach to any type of pants or trousers | Back features sewn-in leatherette crosspatch',
                'Please choose size based on the sizing guide in the photos and/or description for this item',
                'Suspenders are adjustable and stretch to conform comfortably to your body',
                '1 Inch Wide (25mm) | 100% woven elastic polyester']
        },
        {
            id: 3,
            title:  'Amish Stud Straw Skimmer Hat',
            seller: 'Forum Novelties',
            stars: 3.6,
            number_ratings: 115,
            prime: false,
            options: [{
                option: 'One Size',
                list_price: 7.85,
                price: 7.85
            }],
            description: ['Straw',
                'Size: Standard',
                '11.5" diameter',
                'Polyester fiber and polyurethane foam construction',
                'Approximately 12" inner circumference',
                'Fits medium to small heads']
        },
        {
            id: 4,
            title:  'Super Fly Amish Black Hat',
            seller: 'Jacobson Hat Company',
            stars: 4.2,
            number_ratings: 117,
            prime: false,
            options: [{
                option: 'one-size',
                list_price: 19.79,
                price: 19.79
            }],
            description: ['Faux Suede Polyester Blend',
                'Hat',
                'One Size Fits Most Adult Men Up To Head Size 7 3/8']
        },
        {
            id: 26,
            title:  'Wet Botton Shoofly Pie',
            seller: 'Amish Tastes',
            stars: 4.5,
            number_ratings: 49,
            prime: false,
            options: [{
                option: 'Pack of Two 6" Pies',
                list_price: 29.95,
                price: 29.95
            }, 
            {
                option: 'Pack of Two 9" Pies',
                list_price: 37.95,
                price: 37.95
            }],
            description: ['These premium Shoofly Pies are baked by Miller’s Bird-in-Hand Bake Shop on Gibbon’s Road just outside Bird-in-Hand',
                'For pies made by Smucker’s Bird-in-Hand Bakery along Rt. 340, see item B07Q9XX179',
                'This Wet-Bottom Style Shoofly Pie with Crumb Top Is a Favorite Amish and Mennonite Dessert',
                'Each 9” Pie provides about 7 servings; Packed in a white bakery-style box of heavy cardboard to help ensure safe shipping',
                'Sometimes called "gooey" Shoofly Pie; Can be frozen for long storage']
        },
        {
            id: 27,
            title:  'Homemade Whoopie Pie Variety Favorite',
            seller: 'Amish Tastes',
            stars: 4.3,
            number_ratings: 59,
            prime: false,
            options: [{
                option: 'Pack of 12',
                list_price: 31.95,
                price: 31.95
            },
            {
                option: 'Pack of 24',
                list_price: 49.95,
                price: 49.95
            }],
            description: ['Children love them (and adults too); Wow your guests! These Amish-style snacks are each conveniently sized at about 3" diameter and pack a wonderful homemade flavor',
            'Homemade by the famous Bird-in-Hand Bake Shop on Gibbons Road in Lancaster County, Pennsylvania',
            'This variety pack has 6 each of Chocolate, Pumpkin, Chocolate Peanut Butter, and Oatmeal whoopie pies',
            'Homemade Whoopie Pies make a great snack with a freshly brewed hot coffee - yum!',
            'Packed in a bakery-style white box of heavy cardboard for excellent crush protection during shipping']
        },
        {
            id: 28,
            title:  'Amish Wedding Foods - Apple Butter',
            seller: 'Amish Wedding Foods',
            stars: 4.5,
            number_ratings: 17,
            prime: true,
            options: [{
                option: '2-pack',
                list_price: 18.99,
                price: 18.99
            }],
            description: [String]
            }

    );