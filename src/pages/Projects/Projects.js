import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import {
        ProjectsWrapper,  
        ProjectsContainer, 
        ProjectContent,
        Project, 
        ProjectImage, 
        ProjectDescription,
        ProjectDescriptionText,
        ProjectButton,
        
    } 
from './projects-styling';
import { Title } from '../../components/component-styles';
import '../../App.css';
import lambdaNotesProject from './lambda-notes.png';
import oerBookr from './OERBookr.png';
import CHF from './Screen Shot 2020-08-09 at 10.04.19 AM.png';

const Projects = () => {
    return (
        <ProjectsWrapper>
            <ScrollAnimation animateIn="slideInRight">
                <Title>
                    Projects
                </Title>
            </ScrollAnimation>

            <ProjectsContainer>
                <ProjectContent>
                    <ProjectDescription className='project-description'>
                        <ProjectDescriptionText header>
                            Lambda Notes
                        </ProjectDescriptionText>
                        <ProjectDescriptionText>
                            Lambda Notes is a React app that was built to showcase all of my front-end  
                            knowledge. The app uses all CRUD HTTP methods and as an added feature 
                            I implemented Markdown support for each note.
                        </ProjectDescriptionText>

                        <ScrollAnimation animateIn='bounceInDown'>
                            <ProjectButton href='https://boring-hoover-86587a.netlify.com/'>View Project</ProjectButton>
                        </ScrollAnimation>

                     </ProjectDescription>           
                     <Project right reverse>
                            <ProjectImage src={lambdaNotesProject} alt='lambda notes project'/>
                     </Project>
                </ProjectContent>

                <ProjectContent right >
                    <Project >
                        <ProjectImage src={oerBookr} alt='OER Bookr project'/>
                    </Project>        
                    <ProjectDescription className='project-description-right'>
                        <ProjectDescriptionText header >OER Bookr</ProjectDescriptionText> 
                        <ProjectDescriptionText>
                            OER Bookr is an open educational resource textbook website for teachers. 
                             My role on the project was back-end developer. I set up all MVC’s
                            using Node, SQLite, and Express along with the authentication which was
                            implemented using JSON Web Token.
                        </ProjectDescriptionText> 

                        <ScrollAnimation animateIn='bounceInDown'>
                            <ProjectButton href='https://oerbookr2br.netlify.com/'>View Project</ProjectButton>
                         </ScrollAnimation>
                         
                    </ProjectDescription>
                </ProjectContent>

                <ProjectContent>
                    <ProjectDescription className='project-description'>
                        <ProjectDescriptionText header>
                        Cooper’s Home Furniture 
                        </ProjectDescriptionText>
                        <ProjectDescriptionText>
                        Cooper’s Home Furniture is an online furniture store that aims to bring brand new quality
furniture to the masses. In addition to the e-commerce side of the business, there’s also an
employee portal where agents can book orders for customers and find important
information about the business and sales strategies. Accessibility was a driving force of this
project as the majority of the agents are visually impaired. The site was built using NodeJs,
Express, PostgreSQL, and Firebase, on the backend and React on the frontend.
                        </ProjectDescriptionText>

                        <ScrollAnimation animateIn='bounceInDown'>
                            <ProjectButton href='https://coopershomefurniture.com/'>View Site</ProjectButton>
                        </ScrollAnimation>

                     </ProjectDescription>           
                     <Project right reverse>
                            <ProjectImage src={CHF} alt='coopers home furniture'/>
                     </Project>
                </ProjectContent>
            </ProjectsContainer>
        </ProjectsWrapper>
    )
};

export default Projects