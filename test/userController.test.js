const mongoose = require('mongoose');
const User = require('../models/User');
const { createUser, updateUser, deleteUser, getUserById, getAllUsers } = require('../controllers/userController');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// Initialize Chai and Chai HTTP
chai.use(chaiHttp);


describe('createUser function', function () {
  //timeout to allow for potential asynchronous operations
  this.timeout(5000);

  it('should create a new user and save it to the database', async function () {
    // sample user data
    const userData = {
      name: 'GODSWILL EFFIONG',
      dob: '1992-02-26T00:00:00.000Z',
      gender: 'male',
      email: 'ask4gdswill@gmail.com',
      phone: '8029403129',
      address: { home: '123 home St', billing: '456 address St' },
      socialMedia: [
        {
          _id: '6502d0ce01a586ed36a9a682',
          platform: 'facebook',
          url: 'https://www.facebook.com/donnilzy',
        },
        {
          _id: '6502d0ce01a586ed36a9a683',
          platform: 'twitter',
          url: 'https://twitter.com/donnwilzy',
        },
      ],
      occupation: 'Software Engineer',
      interest: ['Programming', 'Traveling'],
      bio: [
        'A software engineer with a passion for coding and exploring new places.',
      ],
      _id: '6502d0ce01a586ed36a9a681',
      __v: 0,
    };

    // Use Chai HTTP to send a POST request to your createUser route
    const res = await chai
      .request('http://localhost:3000')
      .post('/api') 
      .send(userData);

    // expected response structure
    const expectedResponse = {
      name: 'GODSWILL EFFIONG',
      gender: 'male',
      email: 'ask4gdswill@gmail.com',
      phone: '8029403129',
      address: { home: '123 home St', billing: '456 address St' },
      socialMedia: [
        {
          _id: '6502d0ce01a586ed36a9a682',
          platform: 'facebook',
          url: 'https://www.facebook.com/donnilzy',
        },
        {
          _id: '6502d0ce01a586ed36a9a683',
          platform: 'twitter',
          url: 'https://twitter.com/donnwilzy',
        },
      ],
      occupation: 'Software Engineer',
      interest: ['Programming', 'Traveling'],
      bio: [
        'A software engineer with a passion for coding and exploring new places.',
      ],
      // Remove the `_id` property from the expected response
      // __v: 0,
    };

    // Assertions using Chai
    expect(res).to.have.status(201); // 201 status is set
    expect(res.body).to.deep.equal(expectedResponse); //  response must match the expected structure

    // Verify that the user was created in the database
    const user = await User.findById(expectedResponse._id);
    expect(user).to.not.be.null; // Ensure that the user exists
  });
});





describe('updateUser function', function () {
  // timeout to allow for potential asynchronous operations
  this.timeout(5000);

  it('should update a user and return the updated user data', async function () {
    // sample user data
    const userData = {
      name: 'GODSWILL EFFIONG',
      dob: '1992-02-26T00:00:00.000Z',
      gender: 'male',
      email: 'ask4gdswill@gmail.com',
      phone: '8029403129',
      address: { home: '123 home St', billing: '456 address St' },
      socialMedia: [
        {
          _id: '6502d0ce01a586ed36a9a682',
          platform: 'facebook',
          url: 'https://www.facebook.com/donnilzy',
        },
        {
          _id: '6502d0ce01a586ed36a9a683',
          platform: 'twitter',
          url: 'https://twitter.com/donnwilzy',
        },
      ],
      occupation: 'Software Engineer',
      interest: ['Programming', 'Traveling'],
      bio: [
        'A software engineer with a passion for coding and exploring new places.',
      ],
      _id: '6502d0ce01a586ed36a9a681',
      __v: 0,
    };

    // Create the user in the database
    const user = await User.create(userData);

    // updated user data
    const updatedUserData = {
      name: 'GODSWILL EFFIONG (Updated)',
      occupation: 'Software Engineer (Updated)',
    };

    // Update the user
    await updateUser(null, null, user._id, updatedUserData);

    // Verify that the user was updated in the database
    const updatedUser = await User.findById(user._id);
    expect(updatedUser.name).to.equal('GODSWILL EFFIONG (Updated)');
    expect(updatedUser.occupation).to.equal('Software Engineer (Updated)');
  });
});




describe('deleteUser function', function () {
  //timeout for potential asynchronous operations
  this.timeout(5000);

  it('should delete a user', async function () {
    
    const userIdToDelete = 'replace_with_user_id_to_delete'; // add id to delete here

    // Use Chai HTTP to send a DELETE request to your delete user route
    const res = await chai
      .request('http://localhost:3000') 
      .delete(`/api/${userIdToDelete}`); /// id is called in this params

    // Assertions using Chai
    expect(res).to.have.status(204); // 204 status (No Content) is set for successful deletion
    
  });
});



describe('getUserById function', function () {
  // Increase the timeout to allow for potential asynchronous operations
  this.timeout(5000);

  it('should retrieve an existing user by user_id', async function () {
    // Define an example user_id
    const exampleUserId = '6502d6057677996fc7ee1bd3'; /// e.g user_id

    // Use Chai HTTP to send a GET request to your getUserById route
    const res = await chai.request('http://localhost:3000')
      .get(`/api/:user_Id`); 

    // Assertions using Chai
    expect(res).to.have.status(200); // 200 status 
    expect(res.body).to.have.property('_id', exampleUserId); 
   
  });

  it('should handle a non-existing user', async function () {
    // Define a non-existing user_id
    const nonExistingUserId = '6502d6057677996fc7ee1bd2'; 

    const res = await chai.request('http://localhost:3000')
      .get(`/api/${nonExistingUserId}`);

    // Assertions using Chai
    expect(res).to.have.status(404);r
    expect(res.body).to.have.property('error', 'User not found'); 
  });

  it('hndle error', async function () {
   
    const invalidUserId = '6502d6057677996fc7ee1bd0'; // add a  invalid user_id

   
    const res = await chai.request('http://localhost:3000') 
      .get(`/api/${invalidUserId}`); 

    // Assertions using Chai
    expect(res).to.have.status(500); // 500 status is set for an error 
    expect(res.body).to.have.property('error'); //error message is returned
    // Add more assertions as needed to validate error handling
  });
});



describe('getAllUsers function', function () {
  // timeout to allow for potential asynchronous operations
  this.timeout(5000);

  it('should retrieve all users when no query parameters are provided', async function () {
    // Use Chai HTTP to send a GET request to your getAllUsers route without query parameters
    const res = await chai.request('http://localhost:3000') 
      .get('/api'); 

    // Assertions using Chai
    expect(res).to.have.status(200); // res.status
     // response is an array
    expect(res.body).to.be.an('array');
  
  });

  it('should retrieve users based on provided query parameters', async function () {
    // Define query parameters for filtering users (adjust as needed)
    const queryParams = {
      gender: 'male',
      occupation: 'Software Engineer',
    };

    // Use Chai HTTP to send a GET request to your getAllUsers route with query parameters
    const res = await chai.request('http://localhost:3000') 
      .get('/api')
      .query(queryParams);

    // Assertions using Chai
    // res.status
    expect(res).to.have.status(200); 
     //response is an array
    expect(res.body).to.be.an('array');
   
  });

  it('eroor handling', async function () {
    // Define a scenario that would trigger an error (e.g., invalid query parameters)
    const invalidQueryParams = {
      invalidParam: 'invalidValue',
    };

    // Use Chai HTTP to send a GET request to your getAllUsers route with invalid query parameters
    const res = await chai.request('http://localhost:3000') 
      .get('/api')
      .query(invalidQueryParams);

    // Assertions using Chai
    expect(res).to.have.status(500); // res status
     // error message is returned
    expect(res.body).to.have.property('error');
   
  });
});


