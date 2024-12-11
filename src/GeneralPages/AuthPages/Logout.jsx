import React, { useContext } from 'react';
import Authcontext from '../../Authcontext/Authcontext';

const Logout = () => {
    const { logout } = useContext(Authcontext);
    const handleLogout = () => {
        logout()
        .then(() => {
            console.log('successfully log in');
        })
    }
    return (
        <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded-lg transition duration-300"
        >
            Logout
        </button>
    );
};

export default Logout;