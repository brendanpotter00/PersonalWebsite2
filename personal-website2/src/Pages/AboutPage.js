
import React from 'react'
import Title from '../Components/Title'
import SkillsSection from '../Components/SkillsSection'
import ImageSection from '../Components/ImageSection'
import CourseSection from '../Components/CourseSection'
import about from '../img/archPic1ABOUT.png';
/*
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
*/

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />

            <ImageSection />

            
            <div className="allSkill">

            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Full Stack Development'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Development'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Game Development'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Mobile App Development'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Machine Learning'} progress={'70%'} width={'70%'} />
            </div>
            <Title title={'Languages'} span={'Languages'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Java'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Python'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Scala'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'C++'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'C'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'C#'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Haskell'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'HTML'} progress={'100%'} width={'100%'} />
                <SkillsSection skill={'CSS'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'SQL'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'R'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Swift'} progress={'60%'} width={'60%'} />
            </div>
            <Title title={'Software'} span={'Software'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Postman'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Figma'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'Unity'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'Microsoft Word'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Microsoft Excel'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Adobe Photoshop'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Adobe Illustrator'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Adobe Premier Pro'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Tableau Desktop'} progress={'50%'} width={'50%'} />
            </div>
            <Title title={'Technologies'} span={'Technologies'} />
            <div className="skillsContainer">
                <SkillsSection skill={'React Js'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Express'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'MongoDB'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'git'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Three.js'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Pandas'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Tensorflow'} progress={'50%'} width={'50%'} />
                
                
            </div>
            </div>
            
            
            <Title title={'Courses'} span={'Courses'} />
            <CourseSection />



        </div>
    )
}

export default AboutPage
