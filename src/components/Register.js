import React, { useState } from "react";
import Button from "./Button.js";
import Input from './Input'
import styled from 'styled-components';
import { whichModalAction, toggleModalAction } from "./../actions/index.js";
import { useDispatch } from "react-redux";
import { register } from '../actions/userActions'

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

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const { username, email, password } = formData

    const handleRegister = () => {
        dispatch(register(username.trim(), email.trim(), password.trim()))
        dispatch(toggleModalAction());
        setFormData({ username: '', email: '', password: ''})
    }

    return (
        <RegisterContainer>
            <h2>Register</h2>
            <RegisterForm id="habit-add">
                <Input label="Username" type="text" value={username} name="username" handleChange={(e) => onChange(e)}/>
                <Input label="Email" type="text" value={email} name="email" handleChange={(e) => onChange(e)}/>
                <Input label="Password" type="password" value={password} name="password" handleChange={(e) => onChange(e)}/>
                <Button content='Register' color='#355070' fontWeight="bold" width="130px" handleClick={() => handleRegister()} />
            </RegisterForm>
            <p>Already have an account? <span onClick={ () => dispatch(whichModalAction('login') ) }>Login here.</span></p>
        </RegisterContainer>
    );
};

export default Register;
