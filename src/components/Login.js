import React, { useState } from "react";
import Button from "./Button.js";
import Input from "./Input.js";
import {
    whichModalAction,
    toggleModalAction,
} from "./../actions/modalActions.js";
import { useDispatch } from "react-redux";
import { userLogin, login } from "./../actions/userActions.js";

import { LoginContainer, LoginForm } from "../styled_components/styled.js";



const Login = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: "user1",
        password: "123456",
    });

    const onChange = (e, name) => {
        setFormData({ ...formData, [name]: e.target.value });
    };

    const { username, password } = formData;

    const handleLogin = () => {
        dispatch(login(username.trim(), password.trim()));
        dispatch(toggleModalAction());
        setFormData({ username: "", password: "" });
    };

    return (
        <LoginContainer>
            <h2>Login</h2>
            <LoginForm id="habit-add">
                <Input
                    label="Username"
                    type="text"
                    id="Username"
                    // value={username}
                    value= 'user1'
                    placeholder="Username"
                    name="username"
                    handleChange={(e) => onChange(e, "username")}
                />
                <Input
                    label="Password"
                    type="password"
                    id="Password"
                    // value={password}
                    value='123456'
                    placeholder="Password"
                    name="password"
                    handleChange={(e) => onChange(e, "password")}
                />

                <Button
                    content="Login"
                    color="#6d597a"
                    fontWeight="bold"
                    width="130px"
                    handleClick={() => handleLogin()}
                />
            </LoginForm>
            <p>
                Don't have an account?{" "}
                <span onClick={() => dispatch(whichModalAction("register"))}>
                    Register here.
                </span>
            </p>
        </LoginContainer>
    );
};

export default Login;
