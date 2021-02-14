import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    background: ${ props => props.color };
    color: ${ props => props.font };
    outline: none;
    border: none;
    padding: 12px 30px;
    border-radius: 12px;
    text-align: center;
    font-size: .9em;
    font-weight: ${ props => props.fontWeight };
    min-width: ${ props => props.width };
    cursor: pointer;
`;

const Modal = ({ color="black", font="white", handleClick, content, fontWeight='normal', width="50px" }) => {
    return (
        <Button type="button" color={color} font={font} onClick={handleClick} fontWeight={fontWeight} width={width}>
            {content}
        </Button>
    )
}

export default Modal
