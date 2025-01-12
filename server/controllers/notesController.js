const express = require('express');
const router = express.Router();
const notesService = require('../services/notesService');

// GET /notes
router.get('/', (req, res) => {
  try {
    const notes = notesService.getAllNotes();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notes.' });
  }
});

// POST /notes
router.post('/', (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(400).json({ error: 'Title and body are required.' });
  }

  try {
    const newNote = notesService.createNote({ title, body });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create note.' });
  }
});

// DELETE /notes/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid note ID.' });
  }

  try {
    const deletedNote = notesService.deleteNote(id);
    res.status(200).json(deletedNote);
  } catch (error) {
    if (error.message === 'Note not found') {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Failed to delete note.' });
    }
  }
});

module.exports = router;
