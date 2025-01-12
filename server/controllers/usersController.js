const express = require('express');
const router = express.Router();

// Example routes for users
router.get('/', (req, res) => res.send('Get all users'));
router.post('/', (req, res) => res.send('Create a user'));

module.exports = router;
