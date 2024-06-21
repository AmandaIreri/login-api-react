import { Link } from 'react-router-dom';
import './navbar.css'; 
// import Login from '../Login';
// import { useState } from 'react';
// import {Modal} from 'react-modal'
// import { useGetUSers } from '../Users/hooks/useGetUsers';

const Navbar = () => {    
    return (
        <nav className="navbar">
            {/* <Link to="/home" className="home">Home</Link>
            <Link to="users" className="users">Users</Link> */}
            {/* Other navbar items */}
            <button type='submit'><Link to="/login" className='login-nav'>Login</Link></button>
        </nav>
    );
};

export default Navbar;