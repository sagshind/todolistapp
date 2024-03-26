const User = require('../Models/User');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const searchUsers = async (req, res) => {
    try {
        const userId = req.params.id; // Assuming the user ID is passed as a route parameter
        const users = await User.findById(userId);
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
    const { name, email, mobileno, password } = req.body;
    const newUser = new User({ name, email, mobileno, password });
    try {
        await newUser.save();
        res.status(200).json({ message: 'User details added successfully..!' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateUser = (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a route parameter
    const { name, email, mobileno, password } = req.body;

    User.findByIdAndUpdate(userId, { name, email, mobileno, password }, { new: true })
        .then(updatedUser => {
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User details updated successfully..!' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        });
};

const deleteUser = (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a route parameter

    User.findByIdAndDelete(userId)
        .then(deletedUser => {
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully..!' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Internal server error' });
        });
};

module.exports = {
    getUsers,
    searchUsers,
    createUser,
    updateUser,
    deleteUser
};
