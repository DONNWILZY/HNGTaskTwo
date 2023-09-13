const express = require('express');
const router = express.Router();
const { createUser, getUser, updateUser, deleteUser } = require('../controllers/userController');
const { validateCreateUser, handleValidationErrors } = require('../validation/validate');


// POST /api: Create a new person.
router.post('/', validateCreateUser,  handleValidationErrors, createUser);

// GET /api/{user_id}: Retrieve details of a person.
router.get('/:user_id', );

// PUT /api/{user_id}: Update details of an existing person.
router.put('/:user_id', updateUser);

// DELETE /api/{user_id}: Remove a person.
router.delete('/:user_id', deleteUser);

module.exports = router;
