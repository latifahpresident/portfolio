import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import { AboutWrapper, AboutTitle, AboutBody, AboutIcons, AboutIcon, } from './about-styles';
import { Title } from '../../components/component-styles';

import { Paragraph } from '../../components/component-styles';
import creative from './creativity (1).svg'
import inquisitive from './people.svg';
import accessability from './key.svg';
import '../../index.css';
import '../../App.css';
import '../../animate.css';

class About extends React.Component {
    
    render () {
    return (
        <AboutWrapper>
           <ScrollAnimation animateIn="slideInLeft">
                <Title className='header'>ABOUT</Title>
           </ScrollAnimation>
                    <AboutIcons>
                            <div className='image'>
                                <ScrollAnimation animateIn='bounceInDown'>
                                <AboutIcon src={creative} alt='createive web developer'/>
                             </ScrollAnimation>
                             <ScrollAnimation animateIn='slideInRight'>
                                <Paragraph>Creative</Paragraph>
                            </ScrollAnimation>
                            </div>
                            <div className='image'>
                            <ScrollAnimation animateIn='bounceInDown'>
                                <AboutIcon src={inquisitive}alt='createive web developer'/>
                             </ScrollAnimation>
                             <ScrollAnimation animateIn='slideInRight'>
                                <Paragraph>Inquistive</Paragraph>
                            </ScrollAnimation>
                            </div>
                            <div className='image'>
                            <ScrollAnimation animateIn='bounceInDown'>
                                <AboutIcon src={accessability} alt='createive web developer'/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn='slideInRight'>
                                <Paragraph>Inclusive</Paragraph>
                            </ScrollAnimation>
                            </div>
                      
                    </AboutIcons>
                    <AboutBody>
                    <Paragraph>
                    Creative and inquisitive Full Stack Web Developer always eager to learn new languages and frameworks. Works well on a team and can be the  missing piece to the puzzle, but also enjoys problem solving and can  work independently.
                     Experience building multiple apps, making sure accessibility is at the forefront.
                    </Paragraph>
                </AboutBody>

           
        </AboutWrapper>
    )}
};

export default About