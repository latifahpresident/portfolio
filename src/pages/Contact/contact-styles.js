import styled from 'styled-components';

export const ContactWrapper = styled.div`
    background-color: #1a3038;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
    /* border: 1px solid orange; */
`;

export const ContactTitle = styled.h1`
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

export const ContactIcons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    .font-awesome {
        color:  #dce3e6;
    }
    @media only screen and (max-width: 700px) {
        width: 100%;
    }
`;