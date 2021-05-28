
import React from 'react'
import Title from '../Components/Title'
import SkillsSection from '../Components/SkillsSection'
import ImageSection from '../Components/ImageSection'
import CourseSection from '../Components/CourseSection'
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
                <SkillsSection skill={'Python'} progress={'20%'} width={'20%'} />
                <SkillsSection skill={'Scala'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Machine Learning'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Web Design'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'C'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'C++'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Haskell'} progress={'40%'} width={'40%'} />
            </div>
            
            
            <Title title={'Courses'} span={'Courses'} />
            <CourseSection />



        </div>
    )
}

export default AboutPage
