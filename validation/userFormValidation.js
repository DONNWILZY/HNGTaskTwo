const { body, validationResult } = require('express-validator');
const validate = require('../validation/validate')


// Validate the request body when creating a new user
const validateCreateUser = [
    body('name').notEmpty().withMessage('Name is required'),
    body('dob').isISO8601().withMessage('Invalid date of birth format'),
    body('gender').isIn(['male', 'female', 'other']).withMessage('Invalid gender'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('phone').isMobilePhone().withMessage('Invalid phone number format'),
    body('address.home').notEmpty().withMessage('Home address is required'),
    body('address.billing').notEmpty().withMessage('Billing address is required'),
    // Add more validation rules for other fields as needed
  ];


  module.exports = {
    validateCreateUser,
  };