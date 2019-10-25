var faker = require('faker');
var database_array = [];
var titles = ['Sweet Farmer\'s Vest', 'Super Sweet Farmer\'s Suspenders', "Farmer's Stud Straw Skimmer Hat", "Super Fly Pilgrim Farmer Black Hat", "Sultry Bib Apron", "They See Me Rollin They Hatin T-shirt", "Straight Stylin Straight Clip Suspender", "Little Sun Hat", "Child's Dress", "Forum Novelties Oversized Bonnet", "Felt Bonnet", "Awesome Straw Hat", "Awesome Plaid Shirt", "This Is My Farmers Costume Tee", "Farming Definition Shirt", "Farmer's Overalls", "Striped Suspenders", "Farm Dress 2.0", "Farm Boy Clothes", "Farm Dress 3.0", "Formal Tee", "Underwraps Farm Dress", "The Plymouth Dress", "Farm Girl Clothes", "Farmer Women's Wear", "Wet Botton Shoofly Pie", "Homemade Whoopie Pie Variety Favorite", "Apple Butter", "Fannie Farmer Cookbook", "Minerva Dairy Butter", "Country Popcorn", "Seedless Rasberry", "Bread n Butter Pickle", "Pickled Beets", "Walnut Creek Hot Eggs", "Wide Noodles", "Founding Farmers Cookbook", "Country Popcorn Butter", "Pickled Hot Okra", "Sweet Onion Relish Jars", "Jalapeno Eggs", "Parsley Noodles", "Old Fashioned Sauerkraut", "Farmers Market Premium Pet Food", "Green Cow Beef Tripe and Broth", "Zesty Bread", "Traffic Jam", "Country Salsa", "Pickled Asparagus", "Organic Sweet Potato", "The Farmer in All of Us: An American Portrait", "A Place to Call Home: Timeless Southern Charm", "Silke Justice", "The Day The Farmers Quit", "The Profitable Hobby Farm, How to Build a Sustainable Local Foods Business 1st Edition", "Apple Farmer Annie", "The Farmers Wife", "Farmer Boy", "Who Took The Farmers Hat?", "The Old Farmer's Almanac 2020", "The Old Farmer's Almanac 2019", "The Farmer's Bridge", "The Animal's of Farmer Jones", "The Complete Guide to Raising Pigs Everything You Need to Know", "The Farm: A Novel", "Start Your Farm: The Authoritative Guide to Becoming a Farmer", "Ragweed's Farm Dog Handbook", "Night Night Farm", "Sleep Tight Farm", "Peek-a-Boo Farm", "Mrs Wishy-Washy's Farm", "Farm Girl", "Glad Farm: A Memoir", "Saving Emma The Pig (The Biggest Little Farm)", "Harrisville Designs Lap Loom (Style A)", "Large Wooden Toy Semi Truck Set with 30 Building Blocks", "Wooden Toy Car Roller Coaster Run - Child-Safe Red/Yellow Finish", "Wooden Toy Horse & Buggy Penny Piggy Bank", "Deluxe Wooden Kid's Toy Box Chest, Pink and Gray (Large - 42\" Wide)", "Aurora World Inc. Cloth Doll", "Buggy Toys Wooden Cars Toy Set CPSIA Kid Safe Finish", "DE Spider Prank Scare Box，Wooden Surprise Box，Handmade Fun Practical Surprise Joke Boxes, Gags & Practical Joke Toys Halloween", "Wooden 8\" Toy Train Play Set, Painted", "Motorcycle Toy Rocking Horse Wooden Solid Oak", "Wooden Heirloom Marble Roller Toy, Child-Safe (Harvest Stained Finish)", "Forum Novelties Child Bonnet", "Wooden Folding Corral Fence Toy", "Wooden Marble Roller Machine Toy, Child-Safe Maple/Walnut Finish", "Deluxe Wooden Pyramid Marble Track Roller Run Toy, Child-Safe Finish", "Buggy Toys Wooden Car Vertical Roller w/ Mini Wooden Cars, Walnut & Maple CPSIA Kid Safe Finish", "Peaceful Classics Wooden Furniture 3-in-1 Childrens High Chair, Wooden Rocking Horse, Writing Desk Solid Oak Wood (Harvest)", "Lehman's Handcrafted Eli & Mattie Children's Rocking Chair", "Buggy Toys Kid's Wooden Play Chairs, Harvest", "Skeleteen Corn Pipe Costume Accessory - Fake Toy Prop Pipe Accessories - 1 Piece", "Jacobson Hat Company Child's Cocoa Straw Cowboy", "Wooden Toy Dump Truck, Child-Safe Finish", "Buggy Toys Kid's Wooden Play Sink / Stove CPSIA Kid Safe Finish, Harvest", "Berlin Flyer Ride Sport Wagon for Kids, All Terrain - Made In the USA - Huge No-Flat Tires - No-Pinch Handle & No-Tip Steering, 300 lb Limit - F410-SS Wagon", "Buggy Toys Rebekah's Collection Doll Crib for 12\" - 18\" Dolls, CPSIA Kid Safe Finish", "The Original Adult Tree Swing (Tangy Orange)"]
const starsObj = { 
    '1': 4.5,
    '2': 2.5,
    '3': 2.5,
    '4': 2.5,
    '5': 1.5,
    '6': 3.5,
    '7': 2,
    '8': 3,
    '9': 3,
    '10': 2.5,
    '11': 3,
    '12': 3,
    '13': 3.5,
    '14': 3,
    '15': 2.5,
    '16': 2.5,
    '17': 3,
    '18': 3,
    '19': 4,
    '20': 2.5,
    '21': 2.5,
    '22': 2.5,
    '23': 2.5,
    '24': 3.5,
    '25': 3,
    '26': 4,
    '27': 3.5,
    '28': 3,
    '29': 3,
    '30': 3.5,
    '31': 2.5,
    '32': 3,
    '33': 3.5,
    '34': 3,
    '35': 4.5,
    '36': 1.5,
    '37': 3,
    '38': 2.5,
    '39': 2,
    '40': 3,
    '41': 2.5,
    '42': 2,
    '43': 4,
    '44': 5,
    '45': 4,
    '46': 1.5,
    '47': 4.5,
    '48': 2.5,
    '49': 4,
    '50': 2,
    '51': 4,
    '52': 2.5,
    '53': 3,
    '54': 2.5,
    '55': 2,
    '56': 4.5,
    '57': 2,
    '58': 2,
    '59': 3.5,
    '60': 3,
    '61': 4,
    '62': 2.5,
    '63': 3.5,
    '64': 3.5,
    '65': 3,
    '66': 1.5,
    '67': 2,
    '68': 3,
    '69': 3.5,
    '70': 5,
    '71': 2.5,
    '72': 3.5,
    '73': 4,
    '74': 1.5,
    '75': 3.5,
    '76': 3.5,
    '77': 3.5,
    '78': 4,
    '79': 2.5,
    '80': 3,
    '81': 1,
    '82': 3,
    '83': 0,
    '84': 2.5,
    '85': 2.5,
    '86': 3.5,
    '87': 3,
    '88': 3,
    '89': 3,
    '90': 4,
    '91': 4,
    '92': 4,
    '93': 2,
    '94': 3,
    '95': 2.5,
    '96': 4,
    '97': 3,
    '98': 3,
    '99': 3.5,
    '100': 2.5 };

const prices= [
        32.83,
        54.06,
        46.79,
        35.99,
        73.16,
        33.59,
        53.44,
        70.77,
        32.75,
        26.85,
        86.44,
        65.65,
        79.1,
        68.57,
        92.52,
        59.54,
        14.14,
        14.26,
        18,
        94.23,
        61.56,
        6.17,
        63.2,
        59.61,
        97.54,
        24.38,
        54.16,
        14.5,
        79.48,
        24.24,
        11.7,
        64.42,
        92.39,
        54.36,
        83.18,
        98.6,
        12.53,
        97.79,
        30.96,
        92.87,
        75.29,
        64.62,
        28.78,
        45.68,
        86.49,
        16.86,
        93.09,
        29.48,
        40.1,
        86.05,
        29.15,
        37.36,
        26.57,
        67.57,
        94.91,
        4.88,
        44.53,
        40.63,
        70.85,
        18.04,
        22.06,
        22.9,
        44,
        95.3,
        36.01,
        70.42,
        56.8,
        96.05,
        37.96,
        74.99,
        9.13,
        41.28,
        24.59,
        32.82,
        32.18,
        74.19,
        15.66,
        16.74,
        96.83,
        88.76,
        59.25,
        91.53,
        53.21,
        9.99,
        13.18,
        91.52,
        66.19,
        25.45,
        49.77,
        57.99,
        75.91,
        82.14,
        18.04,
        51.25,
        66.75,
        36.47,
        56.76,
        90.61,
        15.68,
        53.57 ]

for (var i = 0; i  < 100; i++) {
    database_array.push({
        id: (i+1),
        title:  titles[i],
        seller: faker.name.findName(),
        stars: starsObj[(i+1)],
        number_ratings: faker.finance.amount(1,2000,0),
        prime: faker.random.boolean(),
        options: [{
            option: 'Small',
            price: prices[i]
        },
        {
            option: 'Medium',
            price: faker.finance.amount(1,100,2)
        },
        {
            option: 'Large',
            price: faker.finance.amount(1,100,2)
        }
        ],
        description: [faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence()]
    })
}

//console.log(database_array)

module.exports = { database_array }