import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands';
import { ContactWrapper, ContactIcons } from './contact-styles';
import { Title } from '../../components/component-styles';
import { Paragraph } from '../../components/component-styles';
import '../../App.css';


const Contact = () => {
    return (
        <ContactWrapper>
            <ScrollAnimation animateIn="slideInLeft">
                <Title>Contact</Title>
            </ScrollAnimation>
            <Paragraph header contact>
                Interested in working with me? Get in touch! 
            </Paragraph>
            <ContactIcons>
                <a href="mailto:latifahpresident@gmail.com" aria-label="Contact me by email">
                    <FontAwesomeIcon className='font-awesome' icon={faEnvelope} size="3x" />
                </a>
                <a href='https://twitter.com/latifahpreside1?lang=en' aria-label='Contact me on Twitter.'>
                    <FontAwesomeIcon className='font-awesome' icon={faTwitter} size="3x" />
                </a>
                <a href='https://github.com/latifahpresident' aria-label='View my git hub'>
                    <FontAwesomeIcon className='font-awesome' icon={faGithub} size="3x" />
                </a>
                <a href='https://www.linkedin.com/in/latifah-president/' aria-label='Contact me on LinkedIn'>
                    <FontAwesomeIcon className='font-awesome' icon={faLinkedin} size="3x" />
                </a>
            </ContactIcons>
           
        </ContactWrapper>
    )
};

export default Contact