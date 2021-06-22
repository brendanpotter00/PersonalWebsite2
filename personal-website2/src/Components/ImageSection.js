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
            

                <h4> I am <span> Brendan Potter</span></h4>
                <p className="about-text">
                    I have experiance in web development, game development, machine learning, and iOS App development. I am a freelance programmer on Fiverr and an options trader. 
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>DOB</p>
                        <p>Nationality</p>

                        <p>City</p>
                        
                    </div>
                    <div className="right-section">
                        <p>: Brendan N Potter</p>
                        <p>: Feb 16, 2000</p>
                        <p>: American</p>
                        
                        <p>: San Antonio, Tx</p>
                       
                    </div>
                </div>
                <a href="../img/resume.docx" download="Brendan Potter Resume">
                    <button className="btn">
                        Download Resume
                        <a href="resume.docx" download/>
                    </button>
                </a>
                
                
            </div>
        </div>
    )
}

export default ImageSection
