const Api = require('./db/api');
const faker = require('faker');

const dataRest = {
  name: 'burrito place'
};

const randomDataRest = {
  name: faker.lorem.word()
};

/*Api.insert('restaurants', randomDataRest, result => {
  console.log(result);
});*/

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

// Api.insert('items', randomDataItem, result => {
//   console.log(result);
// });

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

Api.insert('reviews', dataReviews, result => {
  console.log(result);
});