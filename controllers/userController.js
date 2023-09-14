const User = require ('../models/User');


// Function to create a new user
const createUser = async (req, res) => {
    try {
      const { name, dob, gender, email, phone, address, socialMedia, occupation, interest, bio,} = req.body;
  
      const newUser = new User({
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

  // Function to update a user's information
const updateUser = async (req, res) => {
    try {
      const { user_id } = req.params; // Assuming user_id is passed in the URL parameters
      const updatedUserData = req.body; // The updated user data sent in the request body
  
      // Find the user by user_id
      const user = await User.findById(user_id);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the user's information
      user.set(updatedUserData);
      const updatedUser = await user.save();
  
      res.json(updatedUser); // Return the updated user data in the response
    } catch (error) {
      // Handle the error
      const errorMessage = error.message || 'Could not update user';
      res.status(500).json({ error: errorMessage });
    }
  };
  

  const deleteUser = async (req, res) => {
    try {
      const { user_id } = req.params; // Assuming user_id is passed in the URL parameters
  
      // Find and remove the user by user_id
      const deletedUser = await User.findByIdAndRemove(user_id);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully' }); // Response message for successful deletion
    } catch (error) {
      // Handle the error
      const errorMessage = error.message || 'Could not delete user';
      res.status(500).json({ error: errorMessage });
    }
  };


// Function to get a user by their ID or query a field
const getUserById = async (req, res) => {
    try {
      const { user_id } = req.params; // Assuming user_id is passed in the URL parameters
      const { field, value } = req.query; // Extract query parameters
  
      let query;
  
      if (field && value) {
        // If both 'field' and 'value' are provided, use them to search for a user
        query = { [field]: value };
      } else {
        // If 'field' and 'value' are not provided, assume 'user_id' is used
        query = { _id: user_id };
      }
  
      // Find the user based on the query
      const user = await User.findOne(query);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json(user); // Return the user data in the response
    } catch (error) {
      // Handle the error
      const errorMessage = error.message || 'Could not retrieve user';
      res.status(500).json({ error: errorMessage });
    }
  };

  // Function to fetch all users with optional field-based filtering
// const getAllUsers = async (req, res) => {
//   try {
//     const { field, value } = req.query; // Extract query parameters

//     let query = {};

//     if (field && value) {
//       // If both 'field' and 'value' are provided, use them to filter users
//       query = { [field]: value };
//     }

//     // Find users based on the query
//     const users = await User.find(query);

//     res.json(users); // Return the users data in the response
//   } catch (error) {
//     // Handle the error
//     const errorMessage = error.message || 'Could not retrieve users';
//     res.status(500).json({ error: errorMessage });
//   }
// };

// Function to fetch users with optional query parameters
const getAllUsers = async (req, res) => {
    try {
      const queryParams = req.query;
  
      // Initialize an empty query object
      let query = {};
  
      // Iterate through all query parameters and add them to the query object
      for (const param in queryParams) {
        query[param] = queryParams[param];
      }
  
      // Find users based on the query
      const users = await User.find(query);
  
      if (users.length === 0) {
        return res.status(404).json({ error: 'No matching users found' });
      }
  
      res.json(users); // Return the users data in the response
    } catch (error) {
      // Handle the error
      const errorMessage = error.message || 'Could not retrieve users';
      res.status(500).json({ error: errorMessage });
    }
  };
  




const userController = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getAllUsers
  };

  module.exports = userController;
