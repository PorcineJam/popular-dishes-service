//Build out your routes!
const express = require('express');

const app = express();

app.get('/api/popular_items', (req, res) => {

});

app.get('/api/item_reviews', (req, res) => {

});

app.listen(4000, () => {
  console.log('listening on port 4000');
});