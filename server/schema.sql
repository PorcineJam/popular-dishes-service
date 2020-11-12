DROP DATABASE IF EXISTS YELP;
CREATE DATABASE YELP;
USE YELP;


CREATE TABLE restaurants (
  id int(16) AUTO_INCREMENT,
  name VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE items (
  id int(16) AUTO_INCREMENT,
  name VARCHAR(50),
  picture VARCHAR(50),
  restaurant_id int(16),
  PRIMARY KEY (id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE reviews (
  id int(16) AUTO_INCREMENT,
  username VARCHAR(50),
  user_friends int(16),
  user_ratings int(16),
  rating int(16),
  date DATE,
  review VARCHAR(200),
  restaurant_id int(16),
  item_id int(16),
  PRIMARY KEY (id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  FOREIGN KEY (item_id) REFERENCES items(id)
);


/*
  mysql -u root < server/schema.sql
*/

