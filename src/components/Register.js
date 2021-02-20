import React from "react";
import Button from "./Button.js";
import Input from './Input'
import styled from 'styled-components';

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        padding-bottom: 25px;
    }

    p {
        font-size: .8rem;
        padding-top: 25px;

        span {
            font-weight: bold;
            cursor: pointer;
            font-color: #355070;
        }
    }
`;

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const Register = () => {
    return (
        <RegisterContainer>
            <h2>Register</h2>
            <RegisterForm id="habit-add">
                <Input label="Username" type="text" />
                <Input label="Email" type="text" />
                <Input label="Password" type="password" />
                <Button content='Register' color='#355070' fontWeight="bold" width="130px" />
            </RegisterForm>
            <p>Already have an account? <span>Login here.</span></p>
        </RegisterContainer>
    );
};

export default Register;
