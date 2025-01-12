const fs = require('fs');
const path = require('path');
const notesFilePath = path.join(__dirname, '../data/notes.json');

// fetch all notes from the JSON file
const getAllNotes = () => {
  return JSON.parse(fs.readFileSync(notesFilePath, 'utf-8'));
};

// save notes to json file
const saveNotes = (notes) => {
  fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2), 'utf-8');
};

const findNoteById = (id) => {
  const notes = getAllNotes();
  return notes.find((note) => note.id === id);
};

const addNote = (note) => {
  const notes = getAllNotes();
  notes.push(note);
  saveNotes(notes);
};

const deleteNoteById = (id) => {
  const notes = getAllNotes();
  const index = notes.findIndex((note) => note.id === id);
  if (index === -1) return null;

  const deletedNote = notes.splice(index, 1)[0];
  saveNotes(notes);
  return deletedNote;
};

module.exports = { getAllNotes, findNoteById, addNote, deleteNoteById };
