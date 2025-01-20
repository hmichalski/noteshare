const notesRepository = require('../repositories/notesRepository');
const Note = require('../models/Note');
const crypto = require('crypto');

const getAllNotes = () => {
    return notesRepository.getAllNotes();
};

const createNote = ({ title, body, authorId }) => {
    const id = crypto.randomUUID();
    const newNote = new Note(id, title, body, authorId);
    notesRepository.addNote(newNote);
    return newNote;
};

const deleteNote = (id) => {
    const note = notesRepository.findNoteById(id);
    if (!note) {
        throw new Error('notesService: deleteNote: Note not found');
    }
    notesRepository.deleteNoteById(id);
    return note;
};

// Get all user notes, both shared and ones created.
const getUserNotes = (userId) => {
    try {
        const notes = notesRepository.getAllNotes();
        const result = { myNotes: [], sharedNotes: [] };

        notes.forEach(note => {
            if (note.author === userId) {
                result.myNotes.push(note);
            } else if (Array.isArray(note.sharedWith) && note.sharedWith.includes(userId)) {
                result.sharedNotes.push(note);
            }
        });
        
        return result;
    } catch (error) {
        throw new Error('noteService: getUserNotes: Failed to fetch user notes.');
    }
};

const unshareNoteWithUser = (noteId, ownerId, targetUserId) => {
    const note = notesRepository.findNoteById(noteId);
    if (!note) {
        throw new Error('noteService: unshareNoteWithUser: Note not found.');
    }

    if (note.author !== ownerId) {
        throw new Error('noteService: unshareNoteWithUser: You are not the owner of this note.');
    }

    const targetUser = userRepository.getUserById(targetUserId);
    if (!targetUser) {
        throw new Error('noteService: unshareNoteWithUser: Target user not found.');
    }

    if (!Array.isArray(note.sharedWith) || !note.sharedWith.includes(targetUserId)) {
        throw new Error('noteService: unshareNoteWithUser: User doesnt have access to this note.');
    }

    note.sharedWith = note.sharedWith.filter((userId) => userId !== targetUserId);
    notesRepository.updateNoteById(noteId, { sharedWith: note.sharedWith });
    return note;
};

const shareNoteWithUser = (noteId, ownerId, targetUserId) => {
    const note = notesRepository.findNoteById(noteId);
    if (!note) {
        throw new Error('noteService: shareNoteWithUser: Note not found.');
    }

    if (note.author !== ownerId) {
        throw new Error('noteService: shareNoteWithUser: You are not the owner of this note.');
    }

    const targetUser = userRepository.getUserById(targetUserId);
    if (!targetUser) {
        throw new Error('noteService: shareNoteWithUser: Target user not found.');
    }

    if (Array.isArray(note.sharedWith) && note.sharedWith.includes(targetUserId)) {
        throw new Error('noteService: shareNoteWithUser: This note is already shared with the target user.');
    }

    note.sharedWith.push(targetUserId);
    notesRepository.updateNoteById(noteId, { sharedWith: note.sharedWith });

    return note;
};

module.exports = { getAllNotes, createNote, deleteNote, getUserNotes, shareNoteWithUser, unshareNoteWithUser };