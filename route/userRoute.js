const express = require('express');
const router = express.Router();
const { createUser, getUserById, updateUser, deleteUser, getAllUsers} = require('../controllers/userController');
const { handleValidationErrors } = require('../validation/validate');
const { validateCreateUser } = require('../validation/userFormValidation');


// POST /api: Create a new person.
router.post('/', validateCreateUser,  handleValidationErrors, createUser);

// GET /api/{user_id}: Retrieve details of a person.
router.get('/:user_id', getUserById);

// PUT /api/{user_id}: Update details of an existing person.
router.put('/:user_id', validateCreateUser,  handleValidationErrors, updateUser);

// DELETE /api/{user_id}: Remove a person.
router.delete('/:user_id', deleteUser);

router.get('/', getAllUsers)

module.exports = router;
