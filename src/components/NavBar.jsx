import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () =>

    <nav>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
    </nav>

export default NavBar