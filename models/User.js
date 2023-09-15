const mongoose = require('mongoose');

// Create a Mongoose schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    //required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other'],
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    home: {
      type: String,
      required: true,
    },
    billing: {
      type: String,
      required: true,
    },
  },
  socialMedia: {
    type: [
      {
        platform: {
          type: String,
          enum: ['facebook', 'twitter', 'linkedIn', 'ZuriChat', 'other'],
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  occupation: {
    type: String,
  },
  interest: {
    type: [String],
  },
  bio: {
    type: [String],
  },
});

// Create a Mongoose model from the schema
const User = mongoose.model('User', UserSchema);

module.exports = User;
