const express = require('express');
const router = express.Router();
const TaskController = require('../Controllers/TaskController');

router.get('/:id', TaskController.getTaskByUser);
router.post('/', TaskController.createTask);
router.put('/:id', TaskController.UpdateTask);
router.delete('/:id', TaskController.DeleteTask);
module.exports = router;

