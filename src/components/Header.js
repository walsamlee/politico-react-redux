import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className='header'>
        <div className="brand">
            <div className="brand-logo">
                
            </div>
        </div>
        <div className="navigation-bar">
            <div className='menu'>
                <nav>
                    <div className="pry-menu-items">
                        <Link to="/parties">Parties</Link>
                        <Link to="/parties/create">Create Party</Link>
                    </div>
                    <div className="logout">
                        <Link to="/login" id="login">Login</Link>
                        <Link to="/signup" id="signup">Register</Link>
                    </div>
                </nav>
            </div>
        </div>
    </div>
);

export default Header;