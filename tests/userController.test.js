const mongoose = require('mongoose');
const request = require('supertest');
const { createUser } = require('../controllers/userController');
const { mockUserModel } = require('mongoose-mock');

// Mock the entire mongoose module
jest.mock('mongoose');

describe('createUser function', () => {
  it('should create a new user', async () => {
    // Define your sample user data
    const userData = {
      name: 'John Doe',
      dob: new Date(),
      gender: 'male',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      address: {
        home: '123 Main Street',
        billing: '456 Elm Street',
      },
      // Add other properties as needed
    };

    // Mock the response
    const res = {
      status: jest.fn().mockReturnThis(), // Mock the status method
      json: jest.fn(),
    };

    // Define your mockUserModel
    const mockUserModel = {
      save: jest.fn(() => Promise.resolve(userData)), // Mock the save method to return user data
    };

    // Mock the mongoose.model method to return the mock model
    mongoose.model.mockReturnValue(mockUserModel);

    // Call the createUser function
    await createUser({ body: userData }, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(201); // Ensure a 201 status is set
    expect(res.json).toHaveBeenCalledWith(userData); // Ensure the user data is returned in the response
  });
});
