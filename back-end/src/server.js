import express from 'express';
import {
  cartItems as cartItemsRaw,
  products as productsRaw,
} from './temp-data';

let cartItems = cartItemsRaw;
let products = productsRaw;

const app = express();
app.use(express.json());
const PORT = 8080;

// GET requests
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/cart', (req, res) => {
  res.json(cartItems);
});

app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = products.find((product) => product.id === productId);
  res.json(product);
});

// POST requests
app.post('/cart', (req, res) => {
  const productId = req.body.id;
  const product = products.find((product) => product.id === productId);
  cartItems.push(product);
  res.json(cartItems);
});

// DELETE requests
app.delete('/cart/:productId', (req, res) => {
  const productId = req.params.productId;
  cartItems = cartItems.filter((product) => product.id !== productId);
  res.json(cartItems);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
