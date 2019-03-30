import styled, { keyframes } from 'styled-components';

export const AboutWrapper = styled.div`
    background-color: #1a3038;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-around; */
    padding: 4rem 0;
    height: 100vh;
    /* border: 1px solid orange; */
`;

// export const AboutTitle = styled.h1`
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

export const AboutBody = styled.div`
    width: 60%;
    margin-top: 3rem;
    @media only screen and (max-width: 900px) {
        width: 90%;
    }
`;

const shake = keyframes`
     from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
`;
export const AboutIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 3rem;
    height: 200px;
    width: 90%;
    /* border: 1px solid red; */
    @media only screen and (max-width: 700px) {
        display: none;
    }
   
`;

// export const Paragraph = styled.p`
//     font-size: ${props => props.header ? '2rem' : '1.3rem'};
//     letter-spacing: 2px;
//     line-height: 34px;
//     color: #dce3e6;
//     /* text-align: left; */
//     font-weight: ${props => props.subTitle ? '500' : '600'};
//     text-align: ${props => props.contact ? 'center' : 'left'};
//     width: 100%;
//     .header {
//         line-height: 10px;
//     }

//     @media only screen and (max-width: 700px) {
//         font-size: ${props => props.contact ? '1.5rem' : '1.3'};
//     }
// `;

export const AboutIcon = styled.img`
    height: 100px;
    &:hover {
        animation: ${shake} .5s ease-in forwards;
    }
`;