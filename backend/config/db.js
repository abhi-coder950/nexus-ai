const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/placement_portal');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`DATABASE WARNING: Failed to connect to MongoDB (${error.message}). The application will run, but database actions will fail. Ensure MongoDB is running on port 27017.`);
  }
};

module.exports = connectDB;
