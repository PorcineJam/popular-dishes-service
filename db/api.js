const db = require('./index');

class Api {
  constructor() {
    this.db = db;
  }

  getAll(table, callback) {
    this.db.query(`SELECT * FROM ${table}`, (err, result) => {
      if (err) {
        callback(err);
        this.db.end();
      } else {
        console.log('getAll success');
        callback(result);
        this.db.end();
      }
    });
  }

  insert(table, data, callback) {
    switch(table) {
      case 'restaurants':
        this.db.query('INSERT INTO restaurants(name) values(?)', [data.name], (err, result) => {
          if (err) {
            callback(err);
            this.db.end();
          } else {
            callback(result);
            this.db.end();
          }
        });
        break;
      case 'items':
        this.db.query('INSERT INTO items(name, picture, restaurant_id) values(?, ?, ?)', [data.name, data.picture, data.restaurant_id], (err, result) => {
          if (err) {
            callback(err);
            this.db.end();
          } else {
            callback(result);
            this.db.end();
          }
        });
        break;
      case 'reviews':
        this.db.query('INSERT INTO reviews(username, user_friends, user_ratings, rating, date, review, restaurant_id, item_id) values(?, ?, ?, ?, ?, ?, ?, ?)', [data.username, data.user_friends, data.user_ratings, data.rating, data.date, data.review, data.restaurant_id, data.item_id], (err, result) => {
          if (err) {
            callback(err);
            this.db.end();
          } else {
            callback(result);
            this.db.end();
          }
        });
        break;
    }
  }
}

module.exports = new Api();