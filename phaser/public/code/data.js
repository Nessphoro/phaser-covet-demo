var DDP = require("ddp.js").default;
var minimongo = require('minimongo-cache');
var cache = new minimongo();
cache.addCollection("looks");
cache.addCollection("look_items");
cache.addCollection("products");
var ddp = new DDP({
    endpoint: "ws://covet.tv/websocket",
    SocketConstructor: WebSocket
});

ddp.on("added", function (message) {
    if (message.collection == "looks") {
        message.fields._id = message.id;
        cache[message.collection].upsert(message.fields);
    }
        
});

ddp.on("changed", function (message) {
    console.log(message);
    if (message.collection == "looks") {
        message.fields._id = message.id;
        cache[message.collection].upsert(message.fields);
    }
        
});

ddp.sub("Defaults");


 cache.products.upsert({ _id: 1, startTime: 0.23, endTime: 0.47, brand: "Tracy Reese", name: "Tracy Reese Women's Fuschia Mums-Print Dress", price: 312, image: "http://covet.in/images/1.png" });
 cache.products.upsert({ _id: 2, startTime: 0.23, endTime: 0.47, brand: "Gucci", name: "Magenta Leather Pumps", price: 159, image: "http://covet.in/images/2.png" });
 cache.products.upsert({ _id: 3, startTime: 0.47, endTime: 0.57, brand: "AG Adriano Goldschmied", name: "The Legging Ankle Skinny Jean Super Black", price: 178, image: "http://covet.in/images/3.png" });
 cache.products.upsert({ _id: 4, startTime: 0.47, endTime: 0.57, brand: "Junya Watanabe", name: "Tweed Varsity Jacket", price: 1430, image: "http://covet.in/images/4.png" });
 cache.products.upsert({ _id: 5, startTime: 0.47, endTime: 0.57, brand: "10 Crosby Derek Lam Karli", name: "Black Wedge Boot", price: 435, image: "http://covet.in/images/5.png" });
 cache.products.upsert({ _id: 6, startTime: 0.47, endTime: 0.57, brand: "3.1 Phillip Lim", name: "Pashli Grey Mini Leather Satchel", price: 415, image: "http://covet.in/images/6.png" });
 cache.products.upsert({ _id: 7, startTime: 0.65, endTime: 1.2, brand: "Josie Natori", name: "Notch Collar Pajama Set", price: 85, image: "http://covet.in/images/7.png" });
 cache.products.upsert({ _id: 8, startTime: 1.22, endTime: 1.23, brand: "L.K. Bennett", name: "Janis Single Breasted Trench Coat", price: 575, image: "http://covet.in/images/8.png" });
 cache.products.upsert({ _id: 9, startTime: 1.22, endTime: 1.23, brand: "Trina Turk", name: "Kurdson Dress", price: 248, image: "http://covet.in/images/9.png" });
 cache.products.upsert({ _id: 10, startTime: 1.22, endTime: 1.23, brand: "Jimmy Choo", name: "Abel Pointed Pumps", price: 702, image: "http://covet.in/images/10.png" });
 cache.products.upsert({ _id: 11, startTime: 1.25, endTime: 1.28, brand: "Zero + Maria Cornejo", name: "Otto reversible leather-trimmed jacquard coat", price: 725, image: "http://covet.in/images/11.png" });
 cache.products.upsert({ _id: 12, startTime: 1.25, endTime: 1.28, brand: "Piamita", name: "Elisa crop Blouse", price: 321, image: "http://covet.in/images/12.png" });
 cache.products.upsert({ _id: 13, startTime: 1.25, endTime: 1.28, brand: "Piamita", name: "Tatiana Wide Leg Pants", price: 363, image: "http://covet.in/images/13.png" });
 cache.products.upsert({ _id: 14, startTime: 1.25, endTime: 1.28, brand: "Isola Cagney", name: "Isola Red Pumps", price: 124, image: "http://covet.in/images/14.png" });
 cache.products.upsert({ _id: 15, startTime: 1.3, endTime: 1.43, brand: "Marc by Marc Jacobs", name: "Luna Jacquard Sweater", price: 200, image: "http://covet.in/images/15.png" });
 cache.products.upsert({ _id: 16, startTime: 1.3, endTime: 1.43, brand: "W118 by Walter Baker", name: "Evan Degrade Leather Biker Jacket", price: 72, image: "http://covet.in/images/16.png" });
 cache.products.upsert({ _id: 17, startTime: 1.3, endTime: 1.43, brand: "Marc by Marc Jacobs", name: "Luna Merino Wool Jacket", price: 27, image: "http://covet.in/images/17.png" });
 cache.products.upsert({ _id: 18, startTime: 1.45, endTime: 1.58, brand: "Self Portrait Clothing", name: "Textured Lace Sweat Shirt Top", price: 276, image: "http://covet.in/images/18.png" });
 cache.products.upsert({ _id: 19, startTime: 1.45, endTime: 1.58, brand: "Rag and Bone", name: "Sky Captain Legging", price: 188, image: "http://covet.in/images/19.png" });
 cache.products.upsert({ _id: 20, startTime: 1.45, endTime: 1.58, brand: "32 Degrees", name: "Packable Down Jacket", price: 46, image: "http://covet.in/images/20.png" });
 cache.products.upsert({ _id: 21, startTime: 1.45, endTime: 1.58, brand: "Adidas-Stella McCartney", name: "Pure Boost Sneakers", price: 135, image: "http://covet.in/images/21.png" });
 cache.products.upsert({ _id: 22, startTime: 1.6, endTime: 1.65, brand: "Trina Turk", name: "Elissa Woven Sheath Dress", price: 412, image: "http://covet.in/images/22.png" });
 cache.products.upsert({ _id: 23, startTime: 1.6, endTime: 1.65, brand: "Fendi", name: "Yellow Leather Pointed Pumps", price: 700, image: "http://covet.in/images/23.png" });
 cache.products.upsert({ _id: 24, startTime: 1.67, endTime: 1.73, brand: "Marc by Marc Jacobs", name: "Toto Printed Crepe Dress", price: 846, image: "http://covet.in/images/24.png" });
 cache.products.upsert({ _id: 25, startTime: 1.67, endTime: 1.73, brand: "Stuart Weitzman", name: "Nouveau Leather Pumps", price: 454, image: "http://covet.in/images/25.png" });
 cache.products.upsert({ _id: 26, startTime: 1.75, endTime: 2.2, brand: "Endless Rose", name: "Nantucket Swirl Dress", price: 106, image: "http://covet.in/images/26.png" });
 cache.products.upsert({ _id: 27, startTime: 1.75, endTime: 2.2, brand: "Rochas", name: "White Leather Flats", price: 220, image: "http://covet.in/images/27.png" });
 cache.products.upsert({ _id: 28, startTime: 2.42, endTime: 3.43, brand: "Moschino", name: "Dinosaur with Bag Cashmere", price: 635, image: "http://covet.in/images/28.png" });
 cache.products.upsert({ _id: 29, startTime: 2.42, endTime: 3.43, brand: "Anine Bing", name: "Quilted Leather Jacket", price: 1335, image: "http://covet.in/images/29.png" });
 cache.products.upsert({ _id: 30, startTime: 2.42, endTime: 3.43, brand: "Chanel", name: "Pink Quilted Leather Satchel", price: 5500, image: "http://covet.in/images/30.png" });
 cache.products.upsert({ _id: 31, startTime: 2.42, endTime: 3.43, brand: "Gucci", name: "Magenta Leather Wedge", price: 288, image: "http://covet.in/images/31.png" });
 cache.products.upsert({ _id: 32, startTime: 2.42, endTime: 3.43, brand: "Kate and Spade", name: "Marquee Chandelier", price: 57, image: "http://covet.in/images/32.png" });
 cache.products.upsert({ _id: 33, startTime: 4.37, endTime: 5.35, brand: "Sass and Bide", name: "Gold Right Now Sweater", price: 395, image: "http://covet.in/images/33.png" });
 cache.products.upsert({ _id: 33, startTime: 5.37, endTime: 6.37, brand: "Sass and Bide", name: "Gold Right Now Sweater", price: 395, image: "http://covet.in/images/33.png" });
 cache.products.upsert({ _id: 34, startTime: 5.37, endTime: 6.37, brand: "Joules", name: "Tweed Field Coat", price: 354, image: "http://covet.in/images/34.png" });
 cache.products.upsert({ _id: 35, startTime: 5.37, endTime: 6.37, brand: "Band of Outsiders", name: "Red and Blue Window Pane", price: 250, image: "http://covet.in/images/35.png" });
 cache.products.upsert({ _id: 36, startTime: 5.37, endTime: 6.37, brand: "Seychelles", name: "Women's Scoundrel Bootie", price: 185, image: "http://covet.in/images/36.png" });
 cache.products.upsert({ _id: 37, startTime: 5.37, endTime: 6.37, brand: "Chanel", name: "Double Flap Shoulder Bag", price: 2000, image: "http://covet.in/images/37.png" });
 cache.products.upsert({ _id: 38, startTime: 6.48, endTime: 7.23, brand: "Peter Pilotto", name: "Alik Top", price: 815, image: "http://covet.in/images/38.png" });
 cache.products.upsert({ _id: 39, startTime: 6.48, endTime: 7.23, brand: "Diane Von Furstenberg", name: "Isabelle Embellished Coat", price: 985, image: "http://covet.in/images/39.png" });
 cache.products.upsert({ _id: 40, startTime: 6.48, endTime: 7.23, brand: "Peter Pilotto", name: "Asymmetric Tweed and Print Pencil Skirt", price: 1085, image: "http://covet.in/images/40.png" });
 cache.products.upsert({ _id: 41, startTime: 6.48, endTime: 7.23, brand: "Manolo Blahnik", name: "Cobalt Blue Pointed Toe Pump", price: 965, image: "http://covet.in/images/41.png" });
 cache.products.upsert({ _id: 42, startTime: 10.4, endTime: 12.33, brand: "Peter Pilotto", name: "Alik Top", price: 815, image: "http://covet.in/images/42.png" });
 cache.products.upsert({ _id: 43, startTime: 10.4, endTime: 12.33, brand: "Peter Pilotto", name: "Asymmetric Tweed and Print Pencil Skirt", price: 1085, image: "http://covet.in/images/43.png" });
 cache.products.upsert({ _id: 44, startTime: 12.6, endTime: 13.2, brand: "Mother of Pearl", name: "Juno Silk Tulip Print Top", price: 360, image: "http://covet.in/images/44.png" });
 cache.products.upsert({ _id: 45, startTime: 12.6, endTime: 13.2, brand: "Emilio Pucci", name: "Red Orange with Peplim and front Ruffle", price: 560, image: "http://covet.in/images/45.png" });
 cache.products.upsert({ _id: 46, startTime: 12.6, endTime: 13.2, brand: "Brian Atwood", name: "Malika Pumps", price: 325, image: "http://covet.in/images/46.png" });
 cache.products.upsert({ _id: 47, startTime: 13.35, endTime: 14.33, brand: "BCBG MAX AZRIA", name: "Women's Jackee Crackled Jacquard Dress", price: 228, image: "http://covet.in/images/47.png" });
 cache.products.upsert({ _id: 48, startTime: 13.35, endTime: 14.33, brand: "BCBG MAX AZRIA", name: "Fringe Waist Belt", price: 98, image: "http://covet.in/images/48.png" });
 cache.products.upsert({ _id: 49, startTime: 13.35, endTime: 14.33, brand: "Renvy", name: "Darra Zip Bootie", price: 139, image: "http://covet.in/images/49.png" });
 cache.products.upsert({ _id: 50, startTime: 15.22, endTime: 18.08, brand: "BCBG MAX AZRIA", name: "Women's Jackee Crackled Jacquard Dress", price: 228, image: "http://covet.in/images/47.png" });
 cache.products.upsert({ _id: 51, startTime: 15.22, endTime: 18.08, brand: "BCBG MAX AZRIA", name: "Fringe Waist Belt", price: 98, image: "http://covet.in/images/48.png" });
 cache.products.upsert({ _id: 52, startTime: 15.22, endTime: 18.08, brand: "Renvy", name: "Darra Zip Bootie", price: 139, image: "http://covet.in/images/49.png" });
 cache.products.upsert({ _id: 53, startTime: 19.1, endTime: 20.13, brand: "Bedhead", name: "Eiffel Tower-Print Piped Pajama Set", price: 139, image: "http://covet.in/images/50.png" });

exports.ddp = ddp;
exports.cache = cache;