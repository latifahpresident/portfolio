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
            </ProjectsContainer>
        </ProjectsWrapper>
    )
};

export default Projects