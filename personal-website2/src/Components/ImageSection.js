import React from 'react'
import about from '../img/archPic1ABOUT.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt ="" />
            </div>
            
            <div className="about-info">
                <h4> I am <span> Brendan Potter</span></h4>
                <p>
                    I am gay. this a descriptor and is IN IMAGESECTION.JS
                </p>
                <div className="about-details">
                    <div className="name-details">
                        <p>Full Name: Brendan N Potter</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection
