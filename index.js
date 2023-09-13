const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5001;

const userRoute = require('./route/userRoute'); 
app.use('/api', userRoute);




// Database connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

/// db connection error
db.on('error', (error) => {
  console.error('Connection error:', error);
});
//// db connecrion status.Successful message
db.once('open', () => {
  console.log('Connection to MongoDB successful!');
});
//// db connecrion status.failure  message
db.once('close', () => {
  console.log('Connection to MongoDB disconnected.');
});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
  
  app.on('disconnect', () => {
    console.log('disconnected');
  });