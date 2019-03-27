import styled from 'styled-components';

export const ExperienceWrapper = styled.div`
    background-color: #1a3038;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0;
    height: 100vh;
    /* border: 1px solid orange; */
    @media only screen and (max-width: 900px) {
        height: auto;
    }

`;

// export const ExperienceTitle = styled.h1`
//     text-align: center;
//     border-radius: 2px;
//     font-size: 4rem;
//     color:  #dce3e6;
//     padding: 0 3rem;
//     border-bottom: 2.5px solid #eb9a0e;
//     @media only screen and (max-width: 700px) {
//         font-size: 2.5rem;
//     }
// `;

export const ExperienceContent = styled.div`
    border: 1px solid #a1bcc6;
    width: 70%;
    padding: 0 1rem;
    @media only screen and (max-width: 900px) {
        width: 90%;
        margin: 3rem 0;
    }
`;

export const ExperienceContentHeader = styled.div`
    border: 1px solid red;
`;

export const SubTitle = styled.p`
    color:  #dce3e6;
    text-align: left;
    margin-top: -25px;  
    font-weight: 600;
    letter-spacing: 2px;
`;