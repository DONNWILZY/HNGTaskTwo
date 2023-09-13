
const { body, validationResult } = require('express-validator');


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
  
  // Custom middleware to handle validation errors
  const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return validation errors to the client
      return res.status(400).json({ errors: errors});
    }
    next();
  };
  
  module.exports = {
    validateCreateUser,
    handleValidationErrors,
  };
  