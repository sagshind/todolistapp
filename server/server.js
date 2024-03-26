// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./Routes/userRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myToDoListApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(cors()); // Use CORS middleware

// Routes
app.use('/users', userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

// Define routes
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/api/test', (req, res) => {
    res.status(201).json({ message: 'Hello from MERN Stack.!' });
});



