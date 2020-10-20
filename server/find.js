import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import User from './models/user.model.js';

dotenv.config();

connectDB();

const find = async () => {
  const foundUser = await User.findOne({ name: 'Doom Guy' });
  console.log(foundUser);
  process.exit();
};

find();
