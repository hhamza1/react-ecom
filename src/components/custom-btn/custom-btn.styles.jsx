import styled, { css } from 'styled-components';

const btnStyles = css`
    background-color: #000;
    color: #fff;
    border:  none;

    &:hover {
        color: #000;
        background-color: #fff;
        border: 1px solid #000;
    }

`;


const invertedBtnStyles = css`
    background-color: #fff;
    color: #000;
    border: 1px solid #000;

    &:hover  {
        background-color: #000;
        color: #fff;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: #fff;

    &:hover{
        background-color: #357ae8;
        border: none;  
    }
`;

const getBtnStyles = props => {
    if(props.isGoogleSignInBtn) {
        return googleSignInStyles
    }

    return props.inverted ? invertedBtnStyles : btnStyles;
}

export const CustomBtnContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: .5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getBtnStyles}
`;

