const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    ownerId: String,
    taskName: String,
    description: String,
    startDate: Date,
    dueDate: Date,
    priority: String,
    status: String
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
