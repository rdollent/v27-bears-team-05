import React from "react";
import { InputContainer, Label, InputField } from "../../styled_components/styled";



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
