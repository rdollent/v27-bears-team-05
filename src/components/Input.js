import React from 'react'
import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    flex-flow: column;
`;

const Label = styled.label`
    font-size: .65rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding-bottom: 5px;
`;

const InputField = styled.input`
    background: #D6D6D6;
    outline: none;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
`;

const Input = ( { handleChange, label, type } ) => {
    return (
        <InputContainer>
            <Label htmlFor={ label }>{label }</Label>
            <InputField className="mb-1" id={ label } placeholder={ label } type={ type } />
        </InputContainer>
    )
}

export default Input
