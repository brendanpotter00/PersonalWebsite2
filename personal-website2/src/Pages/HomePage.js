import React from 'react';
import {faDigitalOcean, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {fa} from '@fortawesome/free-brands-svg-icons';
import {faFirefox} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '../Components/Title'
//import {faDigitalOcean} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Brendan Potter.</span>
                </h1>
                <p className="h-sub-text">
                   I am a Computer Science and Business Student at Trinity University and will graduate in May 2023. 
                </p>

                <p className="h-sub-text">
                  Founder of bnpWebDesigns LLC. and Software Engineer at Commuv LLC.
                </p>
                <p className="h-sub-text">
                  Below are my Linked-In, Github, and bnpWebDesigns Website
                </p>
               
                <div className="icons">
                    
                    <a className="icon-holder" href="https://www.linkedin.com/in/brendan-potter00/">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </a>
                    <a className="icon-holder" href="https://github.com/brendanpotter00">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a className="icon-holder" href="https://bnpwebdesigns.com/">
                        <FontAwesomeIcon icon={faFirefox} className="icon pay" />
                    </a>

                </div>
            </header>
            
        </div>
    )
}

export default HomePage;
