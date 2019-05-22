import React from 'react';

import Menu from './Menu';
import logo from '../politico.png';

const Header = () => {
    return (
        <div className='header'>
            <div className="brand">
                <div className="brand-logo">
                    <img src={logo} alt='brand-logo'></img>
                </div>
            </div>
            <div className="navigation-bar">
                <div className='menu'>
                    <Menu />
                </div>
            </div>
        </div>
    )
};

export default Header;