const user = require ('../models/User');

// Function to create a new user
const createUser = async (req, res) => {
    try {
      const { name, dob, gender, email, phone, address, socialMedia, occupation, interest, bio,} = req.body;
  
      const newUser = new user({
        name,
        dob,
        gender,
        email,
        phone,
        address,
        socialMedia,
        occupation,
        interest,
        bio,
      });
  
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      // Handle the error
      const errorMessage = error.message || 'Could not create user';
      res.status(500).json({ error: errorMessage });
    }
  };



const userController = {
    createUser,
  };

  module.exports = userController;
