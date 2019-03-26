import styled from 'styled-components';


export const HomeWrapper = styled.div`
    line-height: 25px;
    height: 100vh;
    @media only screen and (max-width: 900px) {
        height:  600px;
        line-height: 80px;
        text-align: center;
  }
`;

export const OpenNav = styled.div`
    color: #dce3e6;
    margin-right: 1.5rem;
    position: absolute;
    right: 0;
    top: 3%;
    height: 45px;
`;

export const HomeContent = styled.header`
    position: absolute;
    top: 300px;
    left: 200px;
    font-size: 2rem;
    letter-spacing: 7px;
    /* border: 1px solid orange; */

    .button {
        display: flex;
        position: absolute;
        right: 0;
        top: 150px;
        justify-content: center;
        align-items: center;
        height: 60px;   
        width: 30%;
        padding: .5rem;
        color: #dce3e6;
        border: 1.5px solid #a1bcc6;
        &:hover {
            background-color: #db9b2d; 
            color: #1a3038;
            border: 1.5px solid #1a3038;
    } 
    @media only screen and (max-width: 900px) {
        display: none;
    }
    }
    @media only screen and (max-width: 900px) {
        margin: 0 auto;
        top: 10%;
        left: 0;
        width: 100%;
        font-size: 1.6rem;
    }
`;

export const HomeHeader = styled.h1`
    color: #dce3e6;
`;

export const HomeSubtitle = styled.p`
    color: #dce3e6;
    text-align: right;
    font-weight: 600;
    @media only screen and (max-width: 900px) {
        text-align: center;
    }

`;
