const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

router.get('/', UserController.getUsers);
router.get('/:id', UserController.searchUsers);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
module.exports = router;
