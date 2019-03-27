import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { ExperienceWrapper, ExperienceContent, SubTitle } from './experience-styled';
import { Paragraph, Title } from '../../components/component-styles';

const Experience = () => {
    return (
        <ExperienceWrapper>
            <ScrollAnimation animateIn="slideInLeft">
                <Title experience>Experience</Title>
            </ScrollAnimation>
            
            
                <ExperienceContent>
                <ScrollAnimation animateIn="fadeIn">
                    <Paragraph header className='header'> Administrative Assistant Georgetown Markets</Paragraph>
                    <SubTitle > August 2014-November 2017 </SubTitle> 
                    <Paragraph>
                        My role as Administrative Assistant at Georgetown Markets included scheduling and coordinating meetings, travel arrangements, and appointments for the owners. When I arrived, the business was storing data mainly on paper. I was able to develop a new filing system and implement new organizational practices that ended up saving the company	$3,000 per year in contracted labor expenses. I was also given the opportunity to train two new administrative assistance during company expansion to ensure that these new practice were followed in detail. 
                    </Paragraph>
                    </ScrollAnimation>
                </ExperienceContent>
            
            <ExperienceContent>
                <ScrollAnimation animateIn="fadeIn">
                    <Paragraph header>Special Education Teachers Assistant Allamanda Elementary School</Paragraph>
                    <SubTitle> September 2011-May 2014 </SubTitle> 
                    <Paragraph>
                        As a Special Education Teaching Assistant I primarily worked with students on varying levels of the autism spectrum. I provided positive directions for students' academic, social, and emotional well-being. I assisted the teacher in implementing, assessing, and updating IEP’s based on student progress. Clerical duties were also involved such as taking attendants and reporting and documenting accidents and injury reports. 
                    </Paragraph>
                </ScrollAnimation>
            </ExperienceContent>
        </ExperienceWrapper>
    )
};

export default Experience