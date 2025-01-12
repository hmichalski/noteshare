import React, { useState, useEffect } from "react";
import './NotesList.css';
import NoteListItem from "../NoteListItem/NoteListItem";

function NotesList() {
    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    }

    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ id: '', title: '', body: '', date: ''});
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    function togglePanel() {
        setIsPanelOpen(!isPanelOpen);
    }

    // initial notes fetch
    useEffect(() => {
        fetch('http://localhost:3001/notes')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch notes.");
            }
            return response.json();
        })
        .then(data => {
            setNotes(data);
        })
        .catch(error => {
            console.error("Error fetching notes:", error);
        });
    }, []);

    function addNote() {
        if (newNote.title && newNote.body) {
            const newNoteObject = {
                title: newNote.title,
                body: newNote.body,
                date: formatDate(new Date())
            };
    
            fetch('http://localhost:3001/notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newNoteObject),
            })
            .then(response => { //response is the note added, with id set on backend
                if (!response.ok) {
                    throw new Error("Failed to add note.");
                }
                return response.json(); 
            })
            .then(data => {
                setNotes([...notes, data]); //adds note to the list
                setNewNote({ id: '', title: '', body: '', date: ''});
                setIsPanelOpen(false);
            })
            .catch(error => {
                console.error("Error adding note:", error);
            });
        }
    }

    function deleteNote(id) {
        fetch(`http://localhost:3001/notes/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to delete note.");
            }
            setNotes(notes.filter(note => note.id !== id)); // remove the note from the state
        })
        .catch(error => {
            console.error("Error deleting note:", error);
        });
    }

    return (
        <div className="notes-list">
            <h2>Notes list</h2>
            <div className="note-items-wrapper">
                {notes.map(note => (
                    <NoteListItem key={note.id} note={note} onDelete={deleteNote} />
                ))}
            </div>
            <button onClick={togglePanel}>+</button>
            {isPanelOpen && (
                <>
                    <div className="backdrop" onClick={togglePanel}></div>
                    <div className="add-note-panel">
                        <button onClick={togglePanel}>
                            <img src="/x.png" alt="close" />
                        </button>
                        <h3>Add new note</h3>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                placeholder="Title"
                                value={newNote.title}
                                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                            />
                            {newNote.title && newNote.title.length < 3 && (
                                <p className="warning">Title cannot be shorter than 3 characters!</p>
                            )}
                        </div>
                        <div className="input-wrapper">
                            <textarea
                                placeholder="Body"
                                value={newNote.body}
                                onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
                            />
                            {newNote.body && newNote.body.length < 3 && (
                                <p className="warning">Body cannot be shorter than 3 characters!</p>
                            )}
                        </div>
                        <button onClick={addNote}>Add</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default NotesList;
