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

function getCartIds(cartIds) {
  return cartIds.map((cartId) =>
    products.find((product) => product.id === cartId)
  );
}

app.get('/cart', (req, res) => {
  const cart = getCartIds(cartItems);
  res.json(cart);
});

app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = products.find((product) => product.id === productId);
  res.json(product);
});

// POST requests
app.post('/cart', (req, res) => {
  const productId = req.body.id;
  cartItems.push(productId);
  const cart = getCartIds(cartItems);
  res.json(cart);
});

// DELETE requests
app.delete('/cart/:productId', (req, res) => {
  const productId = req.params.productId;
  cartItems = cartItems.filter((id) => id !== productId);
  const cart = getCartIds(cartItems)
  res.json(cart);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
