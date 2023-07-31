import React from 'react';

function Logout() {
    const handleLogout = () => {
        localStorage.removeItem('token');
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;
