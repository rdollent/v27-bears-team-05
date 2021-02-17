import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import Button from "./../Button.js";
import { toggleModalAction, whichModalAction } from "./../../actions/index.js";

const LoggedInContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoggedInContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;

    p {
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
    }
`;

const Title = styled.div`
    display: flex;

    h1 {
        font-size: 3em;
    }

    .orange {
        color: #e56b6f;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 30px;

    button {
        margin: 0 10px;
    }
`;

const LoggedInView = () => {
    const dispatch = useDispatch()

    return (
        <LoggedInContainer>
            <LoggedInContent>
                Logged In
            </LoggedInContent>
        </LoggedInContainer>
    )
}

export default LoggedInView