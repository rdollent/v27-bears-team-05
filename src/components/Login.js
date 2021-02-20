import React from "react";
import Button from "./Button.js";
import Input from  './Input.js';
import styled from 'styled-components';

const LoginContainer = styled.div`
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

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const Login = () => {
    return (
        <LoginContainer>
            <h2>Login</h2>
            <LoginForm id="habit-add">
                <Input label="Username" type="text" />
                <Input label="Password" type="password" />
                <Button content='Login' color='#6d597a' fontWeight="bold" width="130px" />
            </LoginForm>
            <p>Don't have an account? <span>Register here.</span></p>
        </LoginContainer>
    );
};

export default Login;
