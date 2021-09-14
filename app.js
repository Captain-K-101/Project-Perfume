const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const productRoutes = require('./routes/product');
const AuthRoutes = require('./routes/authentication');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(express.static('client/build'));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/products', productRoutes);
app.use('/api/authentication', AuthRoutes);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.all('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

module.exports = app;
