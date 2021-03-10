import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    flex-flow: column;
`;

const Label = styled.label`
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding-bottom: 5px;
`;

const InputField = styled.input`
    background: #d6d6d6;
    outline: none;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
`;

const Input = ({ handleChange, label, type, id, value, placeholder = "" }) => {
    let min = (type === 'number' ? 0 : '');
    return (
        <InputContainer>
            <Label htmlFor={id}>{label}</Label>
            <InputField
                className="mb-1"
                id={id}
                value={value}
                placeholder={placeholder}
                type={type}
                onChange={(e) => handleChange(e)}
                min={min}
            />
        </InputContainer>
    );
};

export default Input;
