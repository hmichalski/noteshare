const express = require('express');
const cors = require('cors');

const notesController = require('./controllers/notesController');
const usersController = require('./controllers/usersController'); // Import users controller


const app = express();
const PORT = 3001;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from the frontend
    methods: ['GET', 'POST', 'DELETE', 'PUT'], // Allowed HTTP methods
}));
app.use(express.json()); // For parsing JSON request bodies

// Register routes
app.use('/notes', notesController);
app.use('/users', usersController); // Mount the users controller

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

/*
    central config point
    register routes, middleware, start the server
    co robi require?
*/