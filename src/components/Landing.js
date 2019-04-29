import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faUser, faArchive, faUsers, faBuilding, faBriefcase } from '@fortawesome/free-solid-svg-icons';

library.add(faAt);
library.add(faArchive);
library.add(faUsers);
library.add(faBuilding);
library.add(faBriefcase);
library.add(faUser);


const Landing = () => (
    <div className="homepage">
            <div className="sect1">
                <h2>Our Service</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nostrum asperiores eaque vitae labore iusto delectus magni assumenda officiis 
                    necessitatibus porro provident illo odio odit fuga sit, minus consequatur. 
                    Ipsam adipisci veniam, porro accusantium labore sint in vitae, blanditiis, 
                    nostrum fugiat eveniet at temporibus molestiae expedita inventore corrupti 
                    facilis dolorum. Animi nulla dolore aliquid. Fugit, ex reprehenderit?
                </p>
            </div>
            <div className="sect2">
                <div className="col-3">
                    <div className="sect-title">
                        <h1><FontAwesomeIcon icon="at" /></h1>
                        <h4>About Us</h4>
                    </div>
                    <div className="sect-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti, qui nemo, repellat voluptate quis nostrum sed consequatur 
                            perferendis eius incidunt magni eaque modi, accusamus fugiat.
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="sect-title">
                        <h1><FontAwesomeIcon icon="archive" /></h1>
                        <h4>Elections</h4>
                    </div>
                    <div className="sect-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti, qui nemo, repellat voluptate quis nostrum sed consequatur 
                            perferendis eius incidunt magni eaque modi, accusamus fugiat.
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="sect-title">
                        <h1><FontAwesomeIcon icon="users" /></h1>
                        <h4>Users</h4>
                    </div>
                    <div className="sect-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti, qui nemo, repellat voluptate quis nostrum sed consequatur 
                            perferendis eius incidunt magni eaque modi, accusamus fugiat.
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="sect-title">
                        <h1><FontAwesomeIcon icon="building" /></h1>
                        <h4>Parties</h4>
                    </div>
                    <div className="sect-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti, qui nemo, repellat voluptate quis nostrum sed consequatur 
                            perferendis eius incidunt magni eaque modi, accusamus fugiat.
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="sect-title">
                        <h1><FontAwesomeIcon icon="briefcase" /></h1>
                        <h4>Offices</h4>
                    </div>
                    <div className="sect-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti, qui nemo, repellat voluptate quis nostrum sed consequatur 
                            perferendis eius incidunt magni eaque modi, accusamus fugiat.
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="sect-title">
                        <h1><FontAwesomeIcon icon="user" /></h1>
                        <h4>Candidates</h4>
                    </div>
                    <div className="sect-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Deleniti, qui nemo, repellat voluptate quis nostrum sed consequatur 
                            perferendis eius incidunt magni eaque modi, accusamus fugiat.
                        </p>
                    </div>
            </div>
        </div>
    </div>
);

export default Landing;