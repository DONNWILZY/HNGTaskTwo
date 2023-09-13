const request = require('supertest');
//const jest = require('jest')
const app = require('../index'); 
const user = require('../models/User')

test('createUser', async () => {
    // Mock the request body
    const req = {
      body: {
        name: 'John Doe',
        dob: new Date(),
        gender: 'male',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        address: {
          home: '123 Main Street',
          billing: '456 Elm Street',
        },
        socialMedia: [
          {
            platform: 'facebook',
            url: 'https://www.facebook.com/johndoe',
          },
          {
            platform: 'twitter',
            url: 'https://twitter.com/johndoe',
          },
        ],
        occupation: 123456,
        interest: ['coding', 'music', 'travel'],
        bio: ['I am a software engineer who loves to code.'],
      },
    };
  
    // Mock the response
    const res = {
      json: jest.fn(),
    };
  
    // Mock the database
    const userModel = jest.mock('mongoose.model', () => ({
      save: jest.fn(() => Promise.resolve({})),
    }));
  
    // Call the createUser function
    createUser(req, res);
  
    // Assert that the database was called to save the user
    expect(userModel.save).toBeCalled();
  
    // Assert that the response was called with the new user object
    expect(res.json).toBeCalledWith({});
  });