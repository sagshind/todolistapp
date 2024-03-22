// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myToDoListAclspp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(cors()); // Use CORS middleware

// Define routes
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/api/test', (req, res) => {
    res.status(201).json({ message: 'Hello from MERN Stack.!' });
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
