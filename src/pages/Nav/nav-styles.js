import styled, { keyframes } from 'styled-components';

const slideInRight = keyframes`
    {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`; 

export const NavWrapper = styled.div`
    
    background-color:  #1a3038;
    border: 1px solid #dce3e6;
    opacity: .8;
    position: absolute;
    /* display: flex; */
    /* justify-content: flex-end; */
    padding: 1rem;
    right: 0;
    width: 30%;
    height: 96.5%;
    z-index: 1;
    animation: ${slideInRight} 1s ease-in-out forwards;
    /* border: 1px solid red; */
     
`;

export const NavCloseButton = styled.div`
    color: #dce3e6;
    margin-left: 1rem;
    position: absolute;
    left: 0;
    height: 45px; 
`;

export const NavLinks = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    height: 60%;
    justify-content: space-around;
    margin-top: 4rem;
    align-items: center;
    color: #dce3e6;
    .link {
       cursor: pointer;
       font-size: 1.5rem;
       letter-spacing: 7px;
       padding: 0 1rem;
       &:hover {
           border-bottom: 1.5px solid #eb9a0e;
       }

       .link > .active {
        border-bottom: 1.5px solid #eb9a0e;
       }
    }
`;