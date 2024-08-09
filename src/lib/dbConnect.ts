// lib/dbConnect.ts
import mongoose from 'mongoose';

let isConnected = false; 

const dbConnect = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected.');
    return;
  }

  try {
    
    let uri = process.env.MONGODB_URI ?? '';
    await mongoose.connect(uri);

    isConnected = true;
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

export default dbConnect;
