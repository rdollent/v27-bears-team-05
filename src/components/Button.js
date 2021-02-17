import React from 'react'
import styled from 'styled-components';

const ButtonContainer = styled.button`
    background: ${ props => props.color };
    color: ${ props => props.font };
    outline: none;
    border: none;
    padding: ${ props => props.padding };
    border-radius: 15px;
    text-align: center;
    font-size: .9em;
    font-weight: ${ props => props.fontWeight };
    min-width: ${ props => props.width };
    cursor: pointer;
`;

const Button = ({ color="black", font="white", handleClick, content, fontWeight='normal', width="50px", padding="12px 30px" }) => {
    return (
        <ButtonContainer type="button" color={color} font={font} onClick={handleClick} fontWeight={fontWeight} width={width} padding={padding}>
            {content}
        </ButtonContainer>
    )
}

export default Button
