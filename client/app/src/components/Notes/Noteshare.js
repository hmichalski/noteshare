import React, { useState } from "react";
import NotesList from "../NotesList/NotesList";
import LoginRegisterForm from "../LoginRegisterForm/LoginRegisterForm";
import './Noteshare.css';

function Noteshare() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true); 
        console.log("logged");
    };

    return (
    <div>
        <h3>Noteshare</h3>
        <p>A place to manage your notes and share them with others!</p>
        <br />
        {isLoggedIn ? (
            <NotesList /> 
        ) : (
            <LoginRegisterForm onLogin={handleLogin}/>
        )}
    </div>
    );
}

export default Noteshare;