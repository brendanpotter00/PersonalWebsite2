
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
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Java'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React Js'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Node Js'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Python'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Scala'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Machine Learning'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Web Development'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'C'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'C++'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Haskell'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'SQL'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'R'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Tableau'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Microsoft Word'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Microsoft Excel'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Adobe Photoshop'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Adobe Illistrator'} progress={'60%'} width={'60%'} />
            </div>
            
            
            <Title title={'Courses'} span={'Courses'} />
            <CourseSection />



        </div>
    )
}

export default AboutPage
