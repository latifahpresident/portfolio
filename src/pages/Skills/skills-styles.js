import styled from 'styled-components';

export const SkillsWrapper = styled.div`
    background-image: linear-gradient(#a1bcc6, #42798d);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-around; */
    padding: 4rem 0;
    height: 100vh;
    /* border: 1px solid orange; */
`;

export const SkillsTitle = styled.h1`
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

export const SkillsIcons = styled.div`
   display: flex;
   justify-content: center;
   width: 50%;
   margin-top: 4rem;
    /* border: 1px solid red; */
`;

export const IconsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(3, 80px); 
    grid-column-gap: 100px;
    grid-row-gap: 100px;
    justify-items: center;
    width: 50%;

    svg {
        width: 100%;
        &:hover {
            transition: transform .2s;
            transform: scale(1.2);
        }
        @media only screen and (max-width: 700px) {
            width: 80%;
        }
    }

    @media only screen and (max-width: 700px) {
        grid-column-gap: 35px;
        grid-row-gap: 55px;
        grid-template-columns: repeat(3, 100px);
        grid-template-rows: repeat(4, 80px);
        padding: 0 2rem;
        /* border: 1px solid green; */
    }
`;
