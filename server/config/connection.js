const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-shopping';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;

dbConnection.on('connected', () => {
  console.log('Connected to MongoDB');
});

dbConnection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

module.exports = dbConnection;
