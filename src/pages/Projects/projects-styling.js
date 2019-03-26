import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;
    /* height: 100vh; */
    height: auto;
    background-image: linear-gradient(#a1bcc6, #42798d);
`;

export const ProjectsTitle = styled.h1`
    text-align: center;
    border-radius: 2px;
    font-size: 4rem;
    color:  #dce3e6;
    padding: 0 3rem;
    border-bottom: 2.5px solid #eb9a0e;
    @media only screen and (max-width: 700px) {
        font-size: 2.5rem;
    }
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.right ? 'column-reverse' : 'column'};
    width: 60%;
    margin-top: 2rem; 
    justify-content: space-between;  
    /* border: 1px solid red; */
    @media only screen and (max-width: 900px) {
        width: 90%;
        flex-direction: ${props => props.reverse ? 'column' : 'column-reverse'};
        /* flex-direction: column-reverse; */
    }
`;

export const ProjectContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10rem;  
    /* border: 1px solid green; */
    @media only screen and (max-width: 900px) {
        justify-content: space-around;
    }
    @media only screen and (max-width: 700px) {
        flex-direction: column;
    }
   
`;
export const Project = styled.div`
    width: 40%;
    height: 270px;
    border: 1.5px solid #1a3038;    
    &:hover {
        transition: transform .2s;
        transform: scale(1.2);
    }
    @media only screen and (max-width: 700px) {
        margin: 0 auto;
        width: 80%;
    }
`;

export const ProjectImage = styled.img`
    height: 269px;
    width: 100%;
    @media only screen and (max-width: 700px) {
        width: 99.5%;
    }
`;

export const ProjectDescription = styled.div`
    width: 40%;
    @media only screen and (max-width: 700px) {
        margin-top: 2rem;
        width: 100%;
        order: 2;
    }
`;

export const ProjectDescriptionText = styled.p`
    font-size: ${props => props.header ? '2rem' : '1.2rem'};
    line-height: 30px;
    margin: .7rem 0 0 0;
    text-align: left;
    /* border: 1px solid red; */
    @media only screen and (max-width: 700px) {
        margin: 0 auto;
        text-align: center;
        width: 70%;
        margin-bottom: ${props => props.header ? '1rem' : '0rem'}
    }
`;
export const ProjectButton = styled.a`
    display: block;
    height: 35px;
    width: 70%;
    padding-top: 1rem;
    text-decoration: none;
    margin: .5rem auto;  
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #dce3e6;
    color: #1a3038;
    
    border: 1.5px solid #1a3038;
    &:hover {
        color: #1a3038; 
        background-color: #eb9a0e;
    }

    @media only screen and (max-width: 700px) {
        margin: 1.5rem auto;
    }
`;