
import React from 'react'
import Title from '../Components/Title'
import SkillsSection from '../Components/SkillsSection'
import ImageSection from '../Components/ImageSection'
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
                <SkillsSection skill={'Java'} progress={'70%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'40%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'40%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'20%'} width={'90%'} />
                <SkillsSection skill={'Scala'} progress={'80%'} width={'40%'} />
                <SkillsSection skill={'Machine Learning'} progress={'70%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'30%'} width={'25%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'30%'} width={'76%'} />
                <SkillsSection skill={'C'} progress={'50%'} width={'76%'} />
                <SkillsSection skill={'C++'} progress={'80%'} width={'76%'} />
                <SkillsSection skill={'Haskell'} progress={'76%'} width={'40%'} />
            </div>

        </div>
    )
}

export default AboutPage
