import React, { useState, useEffect } from "react";
import "./NotesList.css";
import NoteListItem from "../NoteListItem/NoteListItem";

function NotesList() {
    const loggedUserId = 101; // Replace with dynamic user ID

    const [myNotes, setMyNotes] = useState([]);
    const [sharedNotes, setSharedNotes] = useState([]);
    const [newNote, setNewNote] = useState({ id: "", title: "", body: "", });

    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("myNotes");

    function togglePanel() {
        setIsPanelOpen(!isPanelOpen);
    }

    // Fetch notes for the user (both my notes and shared notes)
    useEffect(() => {
        fetch(`http://localhost:3001/notes/user/${loggedUserId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user notes.");
                }
                return response.json();
            })
            .then((data) => {
                setMyNotes(data.myNotes);
                setSharedNotes(data.sharedNotes);
            })
            .catch((error) => {
                console.error("Error fetching user notes:", error);
            });
    }, [loggedUserId]); // Dependency ensures it updates if loggedUserId changes

    function addNote() {
        if (newNote.title && newNote.body) {
            const newNoteObject = {
                title: newNote.title,
                body: newNote.body,
                author: loggedUserId, 
            };

            fetch("http://localhost:3001/notes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newNoteObject),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Failed to add note.");
                    }
                    return response.json();
                })
                .then((data) => {
                    setMyNotes([...myNotes, data]); // Add to "My Notes" tab
                    setNewNote({
                        id: "",
                        title: "",
                        body: "",
                    });
                    setIsPanelOpen(false);
                })
                .catch((error) => {
                    console.error("Error adding note:", error);
                });
                console.log(newNoteObject);
        }
    }

    function deleteNote(id) {
        fetch(`http://localhost:3001/notes/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to delete note.");
                }
                setMyNotes(myNotes.filter((note) => note.id !== id)); // Remove from "My Notes"
                setSharedNotes(sharedNotes.filter((note) => note.id !== id)); // Remove from "Shared Notes"
            })
            .catch((error) => {
                console.error("Error deleting note:", error);
            });
    }

    return (
        <div className="notes-list">
            <h2>Notes</h2>

            {/* Tab Switcher */}
            <div className="tabs">
                <button
                    className={activeTab === "myNotes" ? "active" : ""}
                    onClick={() => setActiveTab("myNotes")}
                >
                    My Notes
                </button>
                <button
                    className={activeTab === "sharedNotes" ? "active" : ""}
                    onClick={() => setActiveTab("sharedNotes")}
                >
                    Shared Notes
                </button>
            </div>

            {/* Notes List */}
            <div className="note-items-wrapper">
                {activeTab === "myNotes" &&
                    myNotes.map((note) => (
                        <NoteListItem key={note.id} note={note} onDelete={deleteNote} />
                    ))}
                {activeTab === "sharedNotes" &&
                    sharedNotes.map((note) => (
                        <NoteListItem key={note.id} note={note} onDelete={deleteNote} />
                    ))}
            </div>

            {/* Add Note Panel */}
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
