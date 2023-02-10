import express from 'express';
const app = express();
const port = process.env.PORT || 8000;
import products from './data/Products_Mock_data.js';
import stores from './data/Store_Mock_data.js';
import users from './data/User_Mock_data.js';

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.get('/api/stores', (req, res) => {
  res.send(stores);
});

app.get('/api/users', (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(
    `Ο διακομιστής ακούει στην πύλη ${port}.  http://localhost:${port}`
  );
});
