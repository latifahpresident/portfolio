import styled from 'styled-components';

export const Paragraph = styled.p`
    font-size: ${props => props.header ? '2rem' : '1.3rem'};
    letter-spacing: 2px;
    line-height: 34px;
    color: #dce3e6;
    /* text-align: left; */
    font-weight: ${props => props.subTitle ? '500' : '600'};
    text-align: ${props => props.contact ? 'center' : 'left'};
    width: 100%;
    .header {
        line-height: 10px;
    }

    @media only screen and (max-width: 700px) {
        font-size: ${props => props.contact ? '1.4rem' : '1.3'};
    }
`;

export const Title = styled.h1`
    text-align: center;
    border-radius: 2px;
    font-size: 4rem;
    color:  #dce3e6;
    padding: 0 3rem;
    /* width: ${props => props.experience ? '50%' : ''}; */
    /* margin-right: ${props => props.experience ? '5rem' : ''};
    margin-left: ${props => props.experience ? '5rem' : ''}; */
    /* border: 1px solid red; */
    border-bottom: 2.5px solid #eb9a0e;
    @media only screen and (max-width: 700px) {
        font-size: 2.5rem;
    }
`;