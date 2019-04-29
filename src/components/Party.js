import React from 'react';
import { Link } from 'react-router-dom';

const Party = ({ party, col }) => (
    <div className={`col-${col}`}>
        <div className="party">
            <div className="party-logo">
                <img src={ party.logoUrl } alt="Party Logo" />
            </div>
            <h3>{ party.name }</h3>
            {
                col === 3 ? <Link to={`/parties/${party.id}`} className="btn btn-cart">View</Link> : ""
            }
            
        </div>
    </div>
);

export default Party;