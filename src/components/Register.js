import React, { useState } from "react";
import Button from "./Button.js";
import Input from "./Input";
import styled from "styled-components";

import {
    whichModalAction,
    toggleModalAction,
} from "./../actions/modalActions.js";

import { useDispatch } from "react-redux";
import { register } from "../actions/userActions";

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        padding-bottom: 25px;
    }

    p {
        font-size: 0.8rem;
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
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const onChange = (e, name) =>
        setFormData({ ...formData, [name]: e.target.value });

    const { username, email, password } = formData;

    const handleRegister = () => {
        dispatch(register(username.trim(), email.trim(), password.trim()));
        dispatch(toggleModalAction());
        setFormData({ username: "", email: "", password: "" });
    };

    return (
        <RegisterContainer>
            <h2>Register</h2>
            <RegisterForm id="habit-add">
                <Input
                    label="Username"
                    id="Username"
                    placeholder="Username"
                    type="text"
                    value={username}
                    handleChange={(e) => onChange(e, "username")}
                />
                <Input
                    label="Email"
                    id="Email"
                    placeholder="Email"
                    type="text"
                    value={email}
                    handleChange={(e) => onChange(e, "email")}
                />
                <Input
                    label="Password"
                    id="Password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    handleChange={(e) => onChange(e, "password")}
                />
                <Button
                    content="Register"
                    color="#355070"
                    fontWeight="bold"
                    width="130px"
                    handleClick={() => handleRegister()}
                />
            </RegisterForm>
            <p>
                Already have an account?{" "}
                <span onClick={() => dispatch(whichModalAction("login"))}>
                    Login here.
                </span>
            </p>
        </RegisterContainer>
    );
};

export default Register;
