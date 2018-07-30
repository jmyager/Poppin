const mongoose = require("mongoose");
const db = require("../models")();

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Popn"
);

const placeSeed = [
    {
      name: "Alchemy",
      address: "606 Glenwood Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The Anchor Bar",
      address: "207 Fayetteville St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The Architect Bar and Social House",
      address: "108 1/2 E Hargett St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The Black Flower",
      address: "517 W Peace St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Boxcar Bar and Arcade",
      address: "330 W Davie St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "C. Grace",
      address: "407 Glenwood Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Capital City Tavern",
      address: "112 Fayetteville St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Carolina Ale House",
      address: "500 Gleenwood Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Circa 1888",
      address: "412 W Davie St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Clockwork",
      address: "519 W North St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Clouds Brewing",
      address: "126 N West St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Coglin's Raleigh",
      address: "226 Fayetteville St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Cornerstone Tavern",
      address: "603 Glenwoode Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Crank Arm Brewing",
      address: "319 W Davie St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Deep South The Bar",
      address: "430 S Dawson St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Dogwood Bar & Eatery",
      address: "610 Glenwood Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Dram & Draught",
      address: "623 Hillsborough St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Empress Room",
      address: "407 Glenwood Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Flash House",
      address: "513 W Peace St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Flex Nightclub",
      address: "2 S West St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Flying Saucer Draught Emporium",
      address: "328 W Morgan St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Foundation",
      address: "213 Fayetteville St ",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Fox Liquor Bar",
      address: "237 S Wilmington St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Gallo Pelon Mezcaleria",
      address: "106 S. Wilmington St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The Green Light",
      address: "108 1/2 E Hargett St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Havana Deluxe",
      address: "437 Glenwood Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Kings",
      address: "14 W Martin St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Landmark Tavern",
      address: "117 E Hargett St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Legends Night Club Complex",
      address: "330 W Hargett St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The Level Up Kitchen + Barcadium",
      address: "126 S Salisbury St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Lincoln Theatre",
      address: "126 E Cabarrus St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Little City Brewing + Provisions Co.",
      address: "400 W North St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The London Bridge Pub",
      address: "110 E Hargett St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Lucky B's",
      address: "609 Tucker St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The LYNK",
      address: "410 Glenwood Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Mash & Lauter225 S Wilmington St",
      address: "225 S Wilmington St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Milk Bar",
      address: "410 Glenwood Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Neptunes Parlour",
      address: "14 W Martin St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The Night Rider",
      address: "416 W South St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Noir",
      address: "425 Glenwood Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "North Street Beer Station",
      address: "521 W North St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Oak and Dagger",
      address: "18 Seaboard Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The Outpost",
      address: "306 E Hargett St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Paddy O'Beers",
      address: "121 Fayetteville St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Parkside",
      address: "30 W Marting St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The Parliament",
      address: "322 Glenwood Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Pearson Street Bar",
      address: "805 N Pearson St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The Pour House Music Hall",
      address: "224 S Blount St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Raleigh Beer Garden",
      address: "614 Gleenwood Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Raleigh Times Bar",
      address: "14 E Hargett St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Ruby Deluxe",
      address: "414 Fayetteville St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Slim's Downtown Distillery",
      address: "227 S Wilmington St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Still Life Raleigh",
      address: "401 N West Street",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Tabacco Roads Sports Café",
      address: "505 W Jones St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Ugly Monkey Party Bar",
      address: "400 W Morgan St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Vita Vite",
      address: "313 W Hargett St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Watts and Ward ",
      address: "200 S Blount St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "West Social Club",
      address: "400 W North St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The Wicked Witch ",
      address: "416 W South St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "William & Company",
      address: "616 N Person St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "The Wine Feed",
      address: "602 Glenwood Ave",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    },
    {
      name: "Woody's at City Market",
      address: "205 Wolfe St",
      type: "bar",
      countShown: 0,
      image: "https://cdn4.iconfinder.com/data/icons/proglyphs-food/512/Beer-512.png"
    }
  ];

db.model('Place')
  .remove({})
  .then(() => db.model('Place').collection.insertMany(placeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });