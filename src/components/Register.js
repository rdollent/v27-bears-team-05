import React from "react";
import Button from "./Button.js";
import Input from './Input'
import styled from 'styled-components';
import { whichModalAction } from "./../actions/modalActions.js";
import { useDispatch } from "react-redux";

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
    const dispatch = useDispatch()
    return (
        <RegisterContainer>
            <h2>Register</h2>
            <RegisterForm id="habit-add">
                <Input label="Username" type="text" id="Username" placeholder="Username" />
                <Input label="Email" type="text" id="Email" placeholder="Email" />
                <Input label="Password" type="password" id="Password" />
                <Button content='Register' color='#355070' fontWeight="bold" width="130px" />
            </RegisterForm>
            <p>Already have an account? <span onClick={ () => dispatch(whichModalAction('login') ) }>Login here.</span></p>
        </RegisterContainer>
    );
};

export default Register;
