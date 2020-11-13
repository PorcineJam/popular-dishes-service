/////////////////////////////////////////////////////////

const Api = require('./db/api');
const faker = require('faker');

/////////////////////////////////////////////////////////

const start = async (table, data) => {
  try {
    const result = await Api.insert(table, data);
    console.log(result);
    Api.db.end();
  } catch (err) {
    console.log(err);
    Api.db.end();
  }
}

/////////////////////////////////////////////////////////

const dataRest = {
  name: 'burrito place'
};

const randomDataRest = {
  name: faker.lorem.word()
};

start('restaurants', dataRest);

/////////////////////////////////////////////////////////

const dataItem = {
  name: 'burrito',
  picture: 'http://image.jpeg',
  restaurant_id: 6
};

const randomDataItem = {
  name: faker.lorem.word(),
  picture: 'http://image.jpeg',
  restaurant_id: Math.floor(Math.random() * 2 + 6)
};

start('items', dataItem);

/////////////////////////////////////////////////////////

var currentDate = new Date().toJSON().slice(0, 10);

const dataReviews = {
  username: 'supbrowannachill',
  user_friends: 5,
  user_ratings: 3,
  rating: 5,
  date: currentDate,
  review: 'food was good',
  restaurant_id: 6,
  item_id: 3
};

const randomDataReviews = {
  username: faker.name.findName(),
  user_friends: Math.floor(Math.random() * 70),
  user_ratings: Math.floor(Math.random() * 70),
  rating: Math.floor(Math.random() * 6),
  date: currentDate,
  review: faker.lorem.words(),
  restaurant_id: 6,
  item_id: 3
};

start('reviews', dataReviews);

/////////////////////////////////////////////////////////