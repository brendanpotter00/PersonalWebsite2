import port1 from '../img/portImages/maya-1.jpg';
import port2 from '../img/portImages/port1.jpg';
import port3 from '../img/portImages/port2.jpg';
import port4 from '../img/portImages/port3.jpg';
import port6 from '../img/portImages/port5.jpg';
import port7 from '../img/portImages/port6.jpg';

import robot from '../img/projImages/p5.png';
import web from '../img/projImages/p6.png';
import glasses from '../img/projImages/p2.png';
import market from '../img/projImages/p4.png';
import arcade from '../img/projImages/p1.png';
import text from '../img/projImages/p7.png';
import mobile from '../img/projImages/p8.png';
import gen from '../img/projImages/p9.png';




const portfolios = [
    {
        /* 
        category ideas: classes, topics, PROBABLY BY LANGUAGE 
        CATEGORIES:
        Web development
        machine learning 
        game development
        full stack learning
        courses 


        LANGUAGES: 
        foo

        */
        
        id: 1,
        category: 'Web Developement',
        link1: 'https://github.com/brendanpotter00/PersonalWebsite2',
        icon1: 'G',
        caption: 'Responsive, professional portfolio website (this website) | JavaScript, React.js',
        image: web,
        title: 'My Personal Website'
    },
    {

        id: 11,
        category: 'Web Developement',
        
        link1: 'https://github.com/brendanpotter00/commuv-web',
        icon1: 'G',
        caption: 'Commuv landing page, displaying app features, testimonials, articles, and team members, with GSAP animations. | HTML, CSS' ,
        link: 'https://commuvwebsite.netlify.app/',
        linkref: 'Commuv Website',
        image: web,
        title: 'Commuv LLC Website'
    },
    {

        id: 5,
        category: 'Full Stack Development',
        
        link1: 'https://github.com/brendanpotter00/garage-simple',
        icon1: 'G',
        caption: 'Online listing for the Phi Sigma Chi fraternity to sell items when graduating college | MERN Stack | In progress',
        link: 'https://garage-sale2.netlify.app/',
        linkref: 'Garage Sale',
        image: glasses,
        title: 'College Garage Sale'
    },
    {
        id: 7,
        category: 'Machine Learning',
        
        link1: 'https://github.com/brendanpotter00/Stock-Price-Predictor',
        icon1: 'G',
        caption: 'Program that predicts the future trading price of a given stock and notifies me, to assist me with trading options | Python, Tensorflow',
        image: market,
        title: 'Market Bot'
    },
    {

        id: 4,
        category: 'Game Development',
       
        link1: 'https://github.com/brendanpotter00/SpaceGame-CS2',
        icon1: 'G',
        caption: 'Game similar to the classic arcade game, Space Invaders, made for CS 2 course | Scala',
        image: arcade,
        link: 'https://i.imgur.com/yMN3UBd.mp4',
        linkref: 'Game Demo',
        title: 'Space Invaders Game'
    },
    {

        id: 100,
        category: 'Web Developement',
        
        link1: 'https://github.com/brendanpotter00/bnpWebDesigns-Temp',
        icon1: 'G',
        caption: 'This is a temporary landing page I made using the ThreeJS library. | JavaScript, HTML, CSS' ,
        link: 'https://bnpwebdesigns.com/',
        linkref: 'bnpWebDesigns',
        image: web,
        title: 'bnpWebDesigns Temp Website'
    },
    
    {
        id: 6,
        category: 'Automation',
        
        link1: 'https://github.com/brendanpotter00/Goodmorning-Text-Bot',
        icon1: 'G',
        caption: 'Program that sends an automated text at any given time of day | Python',
        image: text,
        title: 'Goodmorning Text Bot'
    },
    {
        id: 3,
        category: 'Web Developement',
        
        link1: 'https://github.com/brendanpotter00/3D-website',
        icon1: 'G',
        caption: 'Website made using Three.js for the Phi Sigma Chi fraternity (only works on Desktop) | JavaScript, React.js, Three.js | In progress',
        image: gen,
        link: 'https://phisigmachi.netlify.app/',
        linkref: 'Phi Sigma Chi Website',
        title: '3D Phi Sigma Chi Website'
    },
    {
        id: 2,
        category: 'Machine Learning',
        
        link1: 'https://github.com/brendanpotter00/Smile-Detector',
        icon1: 'G',
        caption: 'Uses webcam to determine if a person is smiling | Python',
        image: robot,
        title: 'Smile Detector'
    },
    {

        id: 10,
        category: 'Mobile App Development',
        
        link1: 'https://github.com/brendanpotter00/Mobile-App',
        icon1: 'G',
        caption: 'Deciding on different ideas for mobile app',
        image: mobile,
        title: 'TBD'
    },
    {
        id: 9,
        category: 'Course Work',
        
        link1: 'https://github.com/brendanpotter00/ComputerDesign-Course',
        icon1: 'G',
        caption: 'Programs for CSCI 2321 | MIPS',
        image: port4,
        title: 'CSCI 2321'
    },
    {
        id: 8,
        category: 'Course Work',
        
        link1: 'https://github.com/brendanpotter00/LowLevel-Course',
        icon1: 'G',
        caption: 'Programs for CSCI 1120 | C',
        image: port4,
        title: 'CSCI 1120'
    },
    {
        id: 101,
        category: 'Course Work',
        
        link1: 'https://github.com/brendanpotter00/threejs-course',
        icon1: 'G',
        caption: 'Bruno Simons ThreeJS course I took | JavaScript, HTML, CSS',
        image: port4,
        title: 'ThreeJS Course'
    },
]

export default portfolios;