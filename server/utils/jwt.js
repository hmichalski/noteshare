const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET;

// access token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1m' });
};

// refresh token
const generateRefreshToken = (userId) => {
    return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '7d' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        throw new Error('Invalid or expired token');
    }
};

const refreshAccessToken = (refreshToken) => {
    try {
        const payload = jwt.verify(refreshToken, SECRET_KEY);
        return generateToken(payload.id);
    } catch (err) {
        throw new Error('Invalid or expired refresh token');
    }
};

module.exports = { generateToken, generateRefreshToken, verifyToken, refreshAccessToken };
