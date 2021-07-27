import React from 'react'
import about from '../img/archPic1ABOUT.png';
import aboutTest from '../img/about.jpg'
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
                <h4> I am <span> Brendan Potter</span></h4>
                </div>
                
                <p className="about-text">
                    I have experiance in web development, game development, machine learning, and iOS App development. I am a freelance programmer on Fiverr and an options trader. I value developing meaningful, lasting relationships and contributing to projects that leave a lasting impact.
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

                    <a href="https://www.linkedin.com/in/brendan-potter-784666202/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADO1-tQBUoqZPzgouOWm02d8PKpi3qFjWd4,1635464342062)/" download="Brendan Potter Resume">
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
