const Task = require('../Models/Task');

const getTaskByUser = async (req, res) => {
    console.log('getTaskByUser ctrl');
    try {
        const ownerId = req.params.id;
        const tasks = await Task.findById(ownerId);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createTask = async (req, res) => {
    const { ownerId, taskName, description, startDate, dueDate, priority, status } = req.body;
    const newTask = new Task({ ownerId, taskName, description, startDate, dueDate, priority, status });
    try {
        await newTask.save();
        res.status(200).json({ message: 'Task added successfully..!' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const UpdateTask = async (req, res) => {
    const taskId = req.params.id;
    const { ownerId, taskName, description, startDate, dueDate, priority, status } = req.body;

    Task.findByIdAndUpdate(taskId, { ownerId, taskName, description, startDate, dueDate, priority, status }, {new : true})
    .then(updatedtask => {
        if (!updatedtask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({message: 'Task updated successfully..!'});
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    });
};

const DeleteTask = async (req, res) => {
    const taskId = req.params.id; // Assuming the user ID is passed as a route parameter

    Task.findByIdAndDelete(taskId)
        .then(deletedTask => {
            if (!deletedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json({ message: 'Task deleted successfully..!' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        });
};

module.exports = {
    getTaskByUser,
    createTask,
    UpdateTask,
    DeleteTask
};
