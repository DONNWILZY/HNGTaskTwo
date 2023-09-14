const mongoose = require('mongoose');
const User = require('../models/User');
const { createUser, updateUser, deleteUser, getUserById, getAllUsers } = require('../controllers/userController');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

// Initialize Chai and Chai HTTP
chai.use(chaiHttp);


// describe('createUser function', function () {
//   // Increase the timeout to allow for potential asynchronous operations
//   this.timeout(5000);

//   it('should create a new user and save it to the database', async function () {
//     // Define your sample user data
//     const userData = {
//       name: 'GODSWILL EFFIONG',
//       dob: '1992-02-26T00:00:00.000Z',
//       gender: 'male',
//       email: 'ask4gdswill@gmail.com',
//       phone: '8029403129',
//       address: { home: '123 home St', billing: '456 address St' },
//       socialMedia: [
//         {
//           _id: '6502d0ce01a586ed36a9a682',
//           platform: 'facebook',
//           url: 'https://www.facebook.com/donnilzy',
//         },
//         {
//           _id: '6502d0ce01a586ed36a9a683',
//           platform: 'twitter',
//           url: 'https://twitter.com/donnwilzy',
//         },
//       ],
//       occupation: 'Software Engineer',
//       interest: ['Programming', 'Traveling'],
//       bio: [
//         'A software engineer with a passion for coding and exploring new places.',
//       ],
//       _id: '6502d0ce01a586ed36a9a681',
//       __v: 0,
//     };

//     // Use Chai HTTP to send a POST request to your createUser route
//     const res = await chai
//       .request('http://localhost:3000') // Replace with your server URL
//       .post('/api') // Replace with the correct route for creating a user
//       .send(userData);

//     // Define the expected response structure
//     const expectedResponse = {
//       name: 'GODSWILL EFFIONG',
//       gender: 'male',
//       email: 'ask4gdswill@gmail.com',
//       phone: '8029403129',
//       address: { home: '123 home St', billing: '456 address St' },
//       socialMedia: [
//         {
//           _id: '6502d0ce01a586ed36a9a682',
//           platform: 'facebook',
//           url: 'https://www.facebook.com/donnilzy',
//         },
//         {
//           _id: '6502d0ce01a586ed36a9a683',
//           platform: 'twitter',
//           url: 'https://twitter.com/donnwilzy',
//         },
//       ],
//       occupation: 'Software Engineer',
//       interest: ['Programming', 'Traveling'],
//       bio: [
//         'A software engineer with a passion for coding and exploring new places.',
//       ],
//       // Remove the `_id` property from the expected response
//       // __v: 0,
//     };

//     // Assertions using Chai
//     expect(res).to.have.status(201); // Ensure a 201 status is set
//     expect(res.body).to.deep.equal(expectedResponse); // Ensure the response matches the expected structure

//     // Verify that the user was created in the database
//     const user = await User.findById(expectedResponse._id);
//     expect(user).to.not.be.null; // Ensure that the user exists
//   });
// });

// Import the User model


// // Define your test
// describe('updateUser function', function () {
//   // Increase the timeout to allow for potential asynchronous operations
//   this.timeout(5000);

//   it('should update a user and return the updated user data', async function () {
//     // Define your sample user data
//     const userData = {
//       name: 'GODSWILL EFFIONG',
//       dob: '1992-02-26T00:00:00.000Z',
//       gender: 'male',
//       email: 'ask4gdswill@gmail.com',
//       phone: '8029403129',
//       address: { home: '123 home St', billing: '456 address St' },
//       socialMedia: [
//         {
//           _id: '6502d0ce01a586ed36a9a682',
//           platform: 'facebook',
//           url: 'https://www.facebook.com/donnilzy',
//         },
//         {
//           _id: '6502d0ce01a586ed36a9a683',
//           platform: 'twitter',
//           url: 'https://twitter.com/donnwilzy',
//         },
//       ],
//       occupation: 'Software Engineer',
//       interest: ['Programming', 'Traveling'],
//       bio: [
//         'A software engineer with a passion for coding and exploring new places.',
//       ],
//       _id: '6502d0ce01a586ed36a9a681',
//       __v: 0,
//     };

//     // Create the user in the database
//     const user = await User.create(userData);

//     // Define the updated user data
//     const updatedUserData = {
//       name: 'GODSWILL EFFIONG (Updated)',
//       occupation: 'Software Engineer (Updated)',
//     };

//     // Update the user
//     await updateUser(null, null, user._id, updatedUserData);

//     // Verify that the user was updated in the database
//     const updatedUser = await User.findById(user._id);
//     expect(updatedUser.name).to.equal('GODSWILL EFFIONG (Updated)');
//     expect(updatedUser.occupation).to.equal('Software Engineer (Updated)');
//   });
// });




// describe('deleteUser function', function () {
//   // Increase the timeout to allow for potential asynchronous operations
//   this.timeout(5000);

//   it('should delete a user', async function () {
//     // Replace with the user_id of the user you want to delete
//     const userIdToDelete = 'replace_with_user_id_to_delete';

//     // Use Chai HTTP to send a DELETE request to your delete user route
//     const res = await chai
//       .request('http://localhost:3000') // Replace with your server URL
//       .delete(`/api/6502d6057677996fc7ee1bd3`); // Replace with the correct route for deleting a user

//     // Assertions using Chai
//     expect(res).to.have.status(204); // Ensure a 204 status (No Content) is set for successful deletion
//     // You can also add additional assertions to verify the response body or other details if needed
//   });
// });



// describe('getUserById function', function () {
//   // Increase the timeout to allow for potential asynchronous operations
//   this.timeout(5000);

//   it('should retrieve an existing user by user_id', async function () {
//     // Define an example user_id
//     const exampleUserId = '6502d6057677996fc7ee1bd3'; // Replace with an actual user_id from your database

//     // Use Chai HTTP to send a GET request to your getUserById route
//     const res = await chai.request('http://localhost:3000') // Replace with your server URL
//       .get(`/api/${exampleUserId}`); // Replace with the correct route for getting a user by user_id

//     // Assertions using Chai
//     expect(res).to.have.status(200); // Ensure a 200 status is set for a successful request
//     expect(res.body).to.have.property('_id', exampleUserId); // Ensure the response contains the correct user_id
//     // Add more assertions as needed for other fields in the response
//   });

//   it('should handle a non-existing user', async function () {
//     // Define a non-existing user_id
//     const nonExistingUserId = '6502d6057677996fc7ee1bd2'; // Replace with a non-existing user_id

//     // Use Chai HTTP to send a GET request to your getUserById route with the non-existing user_id
//     const res = await chai.request('http://localhost:3000') // Replace with your server URL
//       .get(`/api/${nonExistingUserId}`); // Replace with the correct route for getting a user by user_id

//     // Assertions using Chai
//     expect(res).to.have.status(404); // Ensure a 404 status is set for a non-existing user
//     expect(res.body).to.have.property('error', 'User not found'); // Ensure the expected error message is returned
//   });

//   it('hndle error', async function () {
//     // Define a scenario that would trigger an error (e.g., invalid user_id)
//     const invalidUserId = '6502d6057677996fc7ee1bd0'; // Replace with an invalid user_id

//     // Use Chai HTTP to send a GET request to your getUserById route with the invalid user_id
//     const res = await chai.request('http://localhost:3000') // Replace with your server URL
//       .get(`/api/${invalidUserId}`); // Replace with the correct route for getting a user by user_id

//     // Assertions using Chai
//     expect(res).to.have.status(500); // Ensure a 500 status is set for an error scenario
//     expect(res.body).to.have.property('error'); // Ensure an error message is returned
//     // Add more assertions as needed to validate error handling
//   });
// });



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
    expect(res).to.have.status(200); // res.status
    expect(res.body).to.be.an('array'); //response is an array
   
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


