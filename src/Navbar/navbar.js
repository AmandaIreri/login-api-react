import { useState } from 'react';
// import {Modal} from 'react-modal'
import './navbar.css'; 
import Login from '../Login';
// import { useGetUSers } from '../Users/hooks/useGetUsers';


const Navbar = () => {
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

    const toggleLoginForm = () => {
        setIsLoginFormOpen(!isLoginFormOpen);
    };
    
    return (
        <nav className="navbar">
            {/* Other navbar items */}
            <button onClick={toggleLoginForm}>Login</button>
            {isLoginFormOpen && <Login />}
        </nav>
    );
};

export default Navbar;