import React from 'react'
import about from '../img/archPic1ABOUT.png';
import aboutTest from '../img/about.jpg'

function ImageSection() {
    return (
        
        
        <div className="ImageSection">
            
            <div className="img">
                <img src={about} alt=""/>
            </div>
            
            <div className="about-info">
            

                <h4> I am <span> Brendan Potter</span></h4>
                <p className="about-text">
                    I am gay. this a descriptor and is IN IMAGESECTION.JS hello hello hello hello hello hellohello hello
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
                <button className="btn">
                    Download Resume
                    <a href="resume.doc" />
                </button>
            </div>
        </div>
    )
}

export default ImageSection
