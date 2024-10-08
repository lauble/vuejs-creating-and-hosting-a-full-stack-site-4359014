import express from 'express';
import { cartItems, products } from './temp-data';

const app = express();
const PORT = 8080;

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

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
