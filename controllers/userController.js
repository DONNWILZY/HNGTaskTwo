const User = require ('../models/User');


//  create a new user
const createUser = async (req, res) => {
    try {
      const { name,  gender, email, phone, address, socialMedia, occupation, interest, dob, bio,} = req.body;
  
      const newUser = new User({
        name,
        gender,
        email,
        phone,
        address,
        socialMedia,
        occupation,
        interest,
        dob,
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

  // Update user 
const updateUser = async (req, res) => {
    try {
      const { user_id } = req.params; 
       // The updated user data sent in the request body
      const updatedUserData = req.body;
  
      // Find the user by user_id
      const user = await User.findById(user_id);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the user's information
      user.set(updatedUserData);
      const updatedUser = await user.save();
      
      // Return the updated user data in the response
      res.json(updatedUser); 
    } catch (error) {
      // Handle the error
      const errorMessage = error.message || 'Could not update user';
      res.status(500).json({ error: errorMessage });
    }
  };
  

  const deleteUser = async (req, res) => {
    try {
      const { user_id } = req.params; 
  
      // Find and remove the user by user_id
      const deletedUser = await User.findByIdAndRemove(user_id);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Response message for successful deletion
      res.status(204).send();
    } catch (error) {
      // Handle the error
      const errorMessage = error.message || 'Could not delete user';
      res.status(500).json({ error: errorMessage });
    }
  };


//get an indivual user by their ID or query a field
const getUserById = async (req, res) => {
    try {
      const { user_id } = req.params; 

      // Extract query parameters e.g ?filed=name&value=effiong Godswill
      const { field, value } = req.query; 
  
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
      
      // Return the user data in the response
      res.json(user); 
    } catch (error) {
      // Handle the error
      console.log(res.body);
      const errorMessage = error.message || 'Could not retrieve user';
      res.status(500).json({ error: errorMessage });
    }
  };


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
      // Return the users data in the response
      res.json(users); 
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
