const express = require('express');
const router = express.Router();
const notesService = require('../services/notesService');

// GET /notes/user/:userId
router.get('/user/:userId', (req, res) => {
    const userId = parseInt(req.params.userId, 10);

    if (isNaN(userId)) {
        return res.status(400).json({ error: 'Invalid user ID.' });
    }

    try {
        const userNotes = notesService.getUserNotes(userId);
        res.status(200).json(userNotes);
    } catch (error) {
        console.error('noteController: Error fetching user notes:', error.message);
        res.status(500).json({ error: 'Failed to fetch user notes.' });
    }
});

// POST /notes
router.post('/', (req, res) => {
    const { title, body, authorId } = req.body;

    if (!title || !body || !authorId) {
        return res.status(400).json({ error: 'Title, body, and authorId are required.' });
    }

    try {
        const newNote = notesService.createNote({ title, body, authorId });
        res.status(201).json(newNote);
    } catch (error) {
        console.error('noteController: Error creating note:', error.message);
        res.status(500).json({ error: 'Failed to create note.' });
    }
});

// DELETE /notes/:id
router.delete('/:id', (req, res) => {
    const noteId = req.params.id;

    try {
        const deletedNote = notesService.deleteNote(noteId);
        res.status(200).json(deletedNote);
    } catch (error) {
        const statusCode = error.message.includes('not found') ? 404 : 500;
        console.error('noteController: Error deleting note:', error.message);
        res.status(statusCode).json({ error: error.message });
    }
});

// POST /notes/:noteId/share
router.post('/:noteId/share', (req, res) => {
    const noteId = req.params.noteId;
    const { ownerId, targetUserId } = req.body;

    if (!ownerId || !targetUserId) {
        return res.status(400).json({ error: 'Owner ID and target user ID are required.' });
    }

    try {
        const updatedNote = notesService.shareNoteWithUser(noteId, ownerId, targetUserId);
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error('noteController: Error sharing note:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// POST /notes/:noteId/unshare
router.post('/:noteId/unshare', (req, res) => {
    const noteId = req.params.noteId;
    const { ownerId, targetUserId } = req.body;

    if (!ownerId || !targetUserId) {
        return res.status(400).json({ error: 'Owner ID and target user ID are required.' });
    }

    try {
        const updatedNote = notesService.unshareNoteWithUser(noteId, ownerId, targetUserId);
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error('noteController: Error unsharing note:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
