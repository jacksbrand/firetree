import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDB from './config/db.js';

import productRoutes from './routes/product.routes.js';
import { notFound, errorHandler } from './middlewares/error.middleware.js';

const PORT = process.env.PORT || 5000;

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server listening on: ${PORT}, env: ${process.env.NODE_ENV}`.yellow.bold
  )
);
