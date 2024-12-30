import React from "react";
import './NoteListItem.css';

function NoteListItem(props) {
    const {note, onDelete} = props;

    function handleDelete() {
        onDelete(note.id);
    }

    return (
        <div className="note-item">
            <div className="note-content">
                <p>{note.title} <span>{note.date}</span></p>
                <p>{note.body}</p>
            </div>
            <button onClick={handleDelete}>
                <img src="/trash.png" alt="Delete" className="button-icon"/>
            </button>
        </div>
    );
}

export default NoteListItem;