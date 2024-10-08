import express from 'express';

const app = express();
const PORT = 8080;

app.get('/hello', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
