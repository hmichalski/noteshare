const notesRepository = require('../repositories/notesRepository');
const Note = require('../models/Note');

// fetch all notes
const getAllNotes = () => {
  return notesRepository.getAllNotes();
};

// create a new note
const createNote = ({ title, body }) => {
  const notes = notesRepository.getAllNotes();
  const newId = notes.length ? notes[notes.length - 1].id + 1 : 1;
  const newNote = new Note(newId, title, body);
  notesRepository.addNote(newNote);
  return newNote;
};

// detele note by id 
const deleteNote = (id) => {
  const note = notesRepository.findNoteById(id);
  if (!note) {
    throw new Error('Note not found');
  }
  notesRepository.deleteNoteById(id);
  return note;
};

module.exports = { getAllNotes, createNote, deleteNote };
