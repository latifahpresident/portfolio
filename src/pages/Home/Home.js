import React, { Component } from 'react';

import Nav from '../Nav/Nav';

import ScrollAnimation from 'react-animate-on-scroll';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HomeWrapper, OpenNav, HomeContent, HomeHeader, HomeSubtitle, } from './home-styles';
import '../../App.css';
import '../../index.css';



class Home extends Component  {
    constructor () {
        super();
        this.state = {
            open: false
          };
        }
      
        openNavbar = () => {
          this.setState({
            open: !this.state.open
          });
          console.log('toggling')
        }

    render () {
        console.log(this.state)
    return ( 
        <HomeWrapper className='home'>
        <OpenNav onClick={this.openNavbar}>
            <FontAwesomeIcon  icon={faBars} size="3x" className={(this.state.open ? 'open-button' : 'close-button')}/>
        </OpenNav>

        <Nav isOpen ={this.state.open} close={this.openNavbar} />
            <HomeContent>
                <ScrollAnimation animateIn="slideInRight">  
                    <HomeHeader className='header'>Hi, I'm <span>Latifah President</span></HomeHeader>
                    <HomeSubtitle>A Full Stack Web Developer</HomeSubtitle>
                        <Link
                            className='button'
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            // offset={-70}
                            duration= {500}
                        >
                            TAKE A LOOK
                        </Link>
                </ScrollAnimation>
            </HomeContent>                
        </HomeWrapper>
    )}

};

export default Home