import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,  } from '@fortawesome/free-solid-svg-icons';

import { NavWrapper, NavCloseButton, NavLinks } from './nav-styles';
import '../../App.css'

class Nav extends  Component { 
    // constructor(props) {
    //     super(props);
    // }
    render () {
   console.log(this.props.isOpen)
        return (     
            // <ScrollAnimation animateOut="slideOutRight">
            <NavWrapper className={(this.props.isOpen ? 'nav-open' : 'nav-close')}>
                <NavCloseButton onClick={this.props.close}>
                    <FontAwesomeIcon  icon={faTimes} size="3x" />
                </NavCloseButton> 
                <NavLinks>
                    <Link
                        className='link'
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration= {500}
                    >
                        ABOUT
                    </Link> 
                    <Link
                        className='link'
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration= {500}
                    >
                        PROJECTS
                    </Link> 
                    <Link
                        className='link'
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration= {500}
                    >
                        EXPERIENCE
                    </Link>
                    <Link
                        className='link'
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration= {500}
                    >
                        SKILLS
                    </Link>
                    <Link
                        className='link'
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        // offset={-70}
                        duration= {500}
                    >
                        CONTACT
                    </Link>
                </NavLinks> 
                      
            </NavWrapper>
             /* </ScrollAnimation> */
        )}
};

export default Nav