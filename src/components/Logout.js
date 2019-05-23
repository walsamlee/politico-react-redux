import React from 'react';

export const Logout = () => {
    const submitHandler = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('who');
        window.location = '/';
    }
    return (
        <div className="logout">
            <button id="user-icon"><i className="fas fa-user"></i></button>
            <button onClick={submitHandler} id="logout">Logout</button>
        </div>
    );
}
