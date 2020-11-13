const db = require('./db');

let seedRestaurants = `LOAD DATA LOCAL INFILE "./restaurants.csv"
INTO TABLE restaurants
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\\r\\n'
IGNORE 1 ROWS;`;

let seedItems = `LOAD DATA INFILE './items.csv'
INTO TABLE items
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\\r\\n'
IGNORE 1 ROWS;`;

let seedReviews = `LOAD DATA INFILE './reviews.csv'
INTO TABLE reviews
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\\r\\n'
IGNORE 1 ROWS;`;

(async function start() {
  try {
    let updates = 0;
    let { affectedRows } = await db.customQuery(seedRestaurants);
    updates += affectedRows;
    affectedRows = await db.customQuery(seedItems).affectedRows;
    updates += affectedRows;
    affectedRows = await db.customQuery(seedReviews).affectedRows;
    updates += affectedRows;
    console.log(`Seed successful with ${updates} made. Closing connection.`);
    db.end();
    console.log('Connection successfully closed');
  } catch (err) {
    console.log(err);
    db.end();
  }
})();
