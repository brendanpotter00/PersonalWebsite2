import React from 'react'
import about from '../img/archPic1ABOUT.png';
import aboutTest from '../img/about.jpg'
import {NavLink} from 'react-router-dom';
//import resume from '../img/resume.doc';

function ImageSection() {
    return (
        
        
        <div className="ImageSection">
            
            <div className="img">
                <img src={about} alt=""/>
            </div>
            
            <div className="about-info">
            
                <div className="card"> 
                <div className="head">
                <h4> Hello, again!</h4>
                </div>
                
                <p className="about-text">
                    My name is Brendan Potter and I am a software engineer that loves expressing my creativity and discovering new technologies through developing software. Once I began programming, I couldn't stop... being able to create whatever you can think of, while impressing, delighting, and providing convience for users, is my passion.
                </p>
                <p className="about-text">
                    In addition to being a software engineer, I love staying active, seeking new experiences, and fostering lasting connections. I cannot go a day without exercising, and interesting fact, I am a PADI certified Scuba Diver and I dove The Great Barrier Reef. If you go to my 
                    <NavLink to="/interests" exact activeClassName="active">
                            "Get To Know Me"
                    </NavLink> section you will see me going about life with friends. 
                </p>
               
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>

                        <p>City</p>
                        
                    </div>
                    <div className="right-section">
                        <p>: Brendan N Potter</p>
                        <p>: 21</p>
                        <p>: American</p>
                        
                        <p>: San Antonio, Tx</p>

                    </div>
                </div>

                    <a href="https://docs.google.com/document/d/e/2PACX-1vTCXzXfDr8fUMVHxzl4lcpsl30QlMYHEb9U6KH_kQzedgDOoYf92hQem8RRfMmknw/pub" download="Brendan Potter Resume">
                        <button className="btn">
                            View or Download Resume
                        </button>
                    </a>                
                </div>
                
                
            </div>
        </div>
    )
}

export default ImageSection
