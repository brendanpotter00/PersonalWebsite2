import React from 'react';
import {faDigitalOcean, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faPaypal} from '@fortawesome/free-brands-svg-icons';
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
                   I am a Computer Science and Business Student at Trinity University and will graduate in May 2023. I have experiance in web development, game development, machine learning, and iOS App development. I am a freelance programmer on Fiverr and an options trader. THIS IS IN HOMEPAGE.JS
                </p>
                <div className="icons">
                    <Link to="https://linkedin.com/in/brendanpotter00" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </Link>
                    <Link to="https://github.com/brendanpotter00" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="https://www.fiverr.com/brendanpotter00" className="icon-holder">
                        <FontAwesomeIcon icon={faPaypal} className="icon pay"/>
                    </Link>
                    
                    
                </div>
            </header>
            
        </div>
    )
}

export default HomePage;
